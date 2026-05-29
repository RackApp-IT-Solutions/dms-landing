import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

interface ContactBody {
  name: string
  email: string
  phone: string
  company: string
  service: 'audit' | 'demo' | 'inquiry'
  message: string
}

const SERVICE_SUBJECTS: Record<string, string> = {
  audit: 'Free Operational Audit Request',
  demo: 'Platform Demo Request',
  inquiry: 'General Inquiry',
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody<ContactBody>(event)

  // Validate required fields
  if (!body.name || !body.email || !body.service || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields: name, email, service, and message are required.',
    })
  }

  const ses = new SESClient({
    region: config.awsRegion,
    credentials: {
      accessKeyId: config.awsAccessKeyId,
      secretAccessKey: config.awsSecretAccessKey,
    },
  })

  const subject = SERVICE_SUBJECTS[body.service] || 'Contact Form Submission'

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #053B61; padding: 24px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #fff; margin: 0; font-size: 20px;">${subject}</h1>
      </div>
      <div style="padding: 24px; background: #f9fafb; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #6b7280; width: 120px;">Name</td>
            <td style="padding: 8px 0; color: #111827; font-weight: 600;">${body.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;">Email</td>
            <td style="padding: 8px 0; color: #111827; font-weight: 600;">${body.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;">Phone</td>
            <td style="padding: 8px 0; color: #111827; font-weight: 600;">${body.phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;">Company</td>
            <td style="padding: 8px 0; color: #111827; font-weight: 600;">${body.company || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;">Service</td>
            <td style="padding: 8px 0;">
              <span style="background: #FE7702; color: #fff; padding: 4px 12px; border-radius: 9999px; font-size: 13px; font-weight: 600;">
                ${subject}
              </span>
            </td>
          </tr>
        </table>
        <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; margin: 0 0 8px;">Message</p>
          <p style="color: #111827; margin: 0; white-space: pre-wrap;">${body.message}</p>
        </div>
      </div>
    </div>
  `

  const command = new SendEmailCommand({
    Source: config.sesFromEmail,
    Destination: {
      ToAddresses: [config.sesFromEmail],
    },
    Message: {
      Subject: { Data: `[DMS Contact] ${subject} - ${body.name}` },
      Body: {
        Html: { Data: htmlBody },
        Text: {
          Data: `${subject}\n\nName: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone || 'N/A'}\nCompany: ${body.company || 'N/A'}\nService: ${body.service}\n\nMessage:\n${body.message}`,
        },
      },
    },
    ReplyToAddresses: [body.email],
  })

  try {
    await ses.send(command)
    return { success: true, message: 'Your message has been sent successfully.' }
  } catch (error: any) {
    console.error('SES Error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email. Please try again later.',
    })
  }
})
