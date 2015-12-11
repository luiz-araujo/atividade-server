'use strict';

let express = require('express');
let app = express();
let routers = require('./routers/index.js');
let config = require('./config.js');
let mongoose = require('mongoose');

app.use('/api', routers.api);
app.use(express.static(__dirname + '/public'));

let urlDatabase = `mongodb://${config.db.host}/${config.db.name}`;

mongoose.connect(urlDatabase);

mongoose.connection.on('error', function(){
	console.log('database connection error');
});

mongoose.connection.once('open', function(){
	app.listen(3000, () => console.log('> localhost:3000'));
});

module.exports = app;