var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'nodeblogs'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/NodeBolgs'
  },

  test: {
    root: rootPath,
    app: {
      name: 'nodeblogs'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/nodeblogs-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'nodeblogs'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/nodeblogs-production'
  }
};

module.exports = config[env];
