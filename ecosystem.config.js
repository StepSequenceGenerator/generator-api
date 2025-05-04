module.exports = {
  apps: [
    {
      name: 'sg-api',
      script: './dist/main.js',
      instance: '1',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
        PORT: 4000,
      },
    },
  ],
};
