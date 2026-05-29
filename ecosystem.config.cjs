module.exports = {
  apps: [
    {
      name: 'dmslanding',
      script: './.output/server/index.mjs',
      exec_mode: 'cluster',
      instances: 'max',
      // Node 20.6+ loads the .env file so runtimeConfig (AWS SES) is populated
      node_args: '--env-file=.env',
      env: {
        PORT: 3001,
        NITRO_PORT: 3001,
      },
    },
  ],
}
