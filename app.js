var app = require('./config/server');
require("dotenv").config();

app.listen(3000, function(){
	console.log('Servidor ON');
});