var express = require('express');
var app = express();
var http = require('http').Server(app);
var base_instance = require('../../lib/mpc_server').make_jiff(http, { logs:true });
//require('../../lib/ext/jiff-server-bignumber').make_jiff(base_instance);

// Serve static files.
app.use('/operations', express.static('operations'));
app.use('/lib', express.static('lib'));
app.use('/lib/ext', express.static('lib/ext'));
app.use('/bignumber.js', express.static('node_modules/bignumber.js'));
http.listen(8080, function () {
  console.log('listening on localhost:8080');
});

console.log('Direct your browser to localhost:8080/operations/add/client.html.');
//console.log('To run a server-based party: node operations/add/party <input>');
console.log();
