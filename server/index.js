const server = require('frappejs/server');

server.start({
    backend: 'sqlite',
    connectionParams: {
    	dbPath: 'test.db',
    },
    staticPath: './static',
    models: require('../models')
});