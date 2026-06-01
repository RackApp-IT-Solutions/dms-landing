module.exports = {
  apps: [
    {
      name: 'dmslanding',
      script: './.output/server/index.mjs',
      // Fork mode, single instance: the Nitro node-server binds the port itself,
      // so cluster mode + instances:'max' makes every worker fight for :3001 (EADDRINUSE).
      exec_mode: 'fork',
      instances: 1,
      // Node 20.6+ loads the .env file so runtimeConfig (AWS SES) is populated
      node_args: '--env-file=.env',
      env: {
        PORT: 3001,
        NITRO_PORT: 3001,
      },
    },
  ],
}
