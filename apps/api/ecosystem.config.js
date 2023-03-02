module.exports = {
  apps: [
    {
      name: 'app',
      script: './dist/index.js',
      watch: false,
      exec_mode: 'cluster',
      autorestart: true,
      instances: 1,
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
