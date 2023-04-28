var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Una API basica desde Express');
});


app.get('/', function(req, res) {
    res.send('Hola desde la API');
});

app.get('/', function(req, res) {
    res.send('Adios desde de una API');
});


app.listen(3000, function() {
    console.log('Aplicacion ejemplo, escuchando el puerto 3000!');
});

