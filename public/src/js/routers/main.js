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
			'who(/)' : 'who',
			'what(/:id)' : 'what', 
			'where(/)' : 'where', 
		},
		
		controller : Main_Controller
	});
	
	return app_router;
});
