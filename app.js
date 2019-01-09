const server = require('server');

const { get, post } = server.router;

// Launch server
server({ port: 5000 }, [
    get('/', ctx => 'Hello world ! dans une branche + PR')
]);
