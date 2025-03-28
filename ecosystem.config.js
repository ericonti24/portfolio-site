module.exports = {
    apps: [
      {
        name: 'myapp-api',
        script: 'yarn start:api',
        time: true,
        instances: 1,
        autorestart: true,
        max_restarts: 50,
        watch: false,
        max_memory_restart: '1G',
        env: {
          PORT: 3000,
          DATABASE_ADDRESS: process.env.DATABASE_ADDRESS
        },
      },
    ],
    deploy: {
      production: {
        user: 'ericonti24',
        host: '165.232.50.103',
        key: 'deploy.key',
        ref: 'origin/main',
        repo: 'https://github.com/ericonti24/portfolio-site',
        path: '/home/ericonti24/portfolio-site',
        'post-deploy':
          'yarn install && yarn build && pm2 reload ecosystem.config.js --env production && pm2 save && git checkout yarn.lock',
        env: {
          NODE_ENV: 'production',
          DATABASE_ADDRESS: process.env.DATABASE_ADDRESS
        },
      },
    },
  }