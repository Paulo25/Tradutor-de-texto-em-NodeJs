//configuração de modulo para renderizacao de paginas através da url

module.exports = function(application){

	application.get('/', function(req, res){
		application.app.controllers.home.index(application, req, res);
	});

	application.post('/traduzir', function(req, res){
		application.app.controllers.home.traduzir_texto(application, req, res);
	});
}

















