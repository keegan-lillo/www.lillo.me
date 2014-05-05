/*global define */

define(function (require) 
{	
	var Marionette = require('marionette');
	var Main_Controller = require('controllers/main');
	
	var app_router = Marionette.AppRouter.extend(
	{
		appRoutes: 
		{
			'' : 'index',
			'who(/*path)' : 'who',
			'what(/*path)' : 'what', 
			'where(/*path)' : 'where', 
		},
		
		controller : Main_Controller
	});
	
	return app_router;
});
