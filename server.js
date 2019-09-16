var cors = require('cors');
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'cpdlc_web',
    password: 'dsnadoteyss3',
    database: 'revueinterneproject'
});

var corsOptions = {
  origin: '*',
  methods: ['GET', 'PUT', 'POST'],
  optionsSuccessStatus: 200
};
 
// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors(corsOptions));

var routes = require('./app/routes/approutes'); //importing route
routes(app); //register the route


