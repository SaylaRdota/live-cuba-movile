const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public/'));

let port = process.env.PORT || '8087';

app.listen(port, function() {
  console.log('Servidor web escuchando en el puerto ' + port);
});
