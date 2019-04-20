var express = require('express');
var app = express();
var http = require('http').Server(app);
var base_instance = require('../../lib/mpc_server').make_jiff(http, { logs:true });
require('../../lib/ext/jiff-server-bignumber').make_jiff(base_instance);

// Serve static files.
app.use('/operations', express.static('operations'));
app.use('/lib', express.static('lib'));
app.use('/lib/ext', express.static('lib/ext'));
app.use('/bignumber.js', express.static('node_modules/bignumber.js'));
http.listen(8080, function () {
  console.log('listening on *:8080');
});

console.log('URL - localhost:8080/operations/2sls/client.html.');
console.log('Command Line - node operations/2sls/party <input>');
console.log();
