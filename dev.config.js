module.exports = {
    apps : [{
      name        : "ghost-hash-dev",
      script      : "./index.js",
      watch       : true,
      ignore_watch: ['content', 'node_modules'],
      env: {
        "NODE_ENV": "development",
      },
      env_production : {
         "NODE_ENV": "production"
      }
    }]
  }