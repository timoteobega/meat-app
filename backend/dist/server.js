"use strict";
exports.__esModule = true;
var jsonServer = require("json-server");
var https = require("https");
var auth_1 = require("./auth");
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
//middleware para login
server.post('/login', auth_1.handleAuthentication);
// Use default router
server.use(router);
var options = {
    //cert: fs.readFileSync('../../../dev/meat-app/backend/keys/cert.perm'),
    //key: fs.readFileSync('../../../dev/meat-app/backend/keys/key.perm')
    cert: '',
    key: ''
};
https.createServer(options, server).listen(3001, function () {
    console.log('JSON Server is running https://localhost:3001');
});
