module.exports = function(app){

	
	
    app.get('/', function(req, res, next) {
		// Render views/indexAngular.html
		res.render('index');
        
        next();
	});
	app.get('/puja', function(req, res,next) {
		// Render views/indexAngular.html
		res.render('puja');
		next();
	});
	
	
	
	app.get('/subasta', function(req, res,next) {
		// Render views/indexAngular.html
		res.render('subastas');
		next();
	});
	// on server started we can load our indexAngular.html page
	app.get('/angular', function(req, res) {
		// Render views/indexAngular.html
		res.render('indexAngular');
	});
    
};