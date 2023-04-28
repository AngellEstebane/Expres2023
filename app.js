var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Una API desde Express');
});


app.get('/saludo', function(req, res) {
    res.send('Hola desde la API');
});

app.get('/despedida', function(req, res) {
    res.send('Adios desde de una API');
});


app.listen(3000, function() {
    console.log('Aplicacion ejemplo, escuchando el puerto 3000!');
});

// require packages and set the port
const express = require('express');
const port = 3002;

//para permitir manejo de POST y PUT
const bodyParser = require('body-parser');
const routes = require('./routes/routes')

// Usar node is body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({

    extended: true,
}));

routes(app);

// iniciar el servidor
const server = app.listen(port, (error) => {
    if (error) return console.log('Error: ${error}');

    console.log('El servidor escucha en el puerto ${server.address().port}');
});