var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json())

const cors = require('cors');

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

// Create a Server
var server = app.listen(8080, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})
