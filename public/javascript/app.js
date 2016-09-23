var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.sendFile('./index.html', {"root": __dirname});
});

// START THE SERVER
// =============================================================================
app.listen(port);