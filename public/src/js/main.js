"use strict";

require.config(
{
	waitSeconds : 30,
	
	paths :
	{
		'jquery' : 'bower_components/jquery/dist/jquery',
		
		'underscore' : 'bower_components/underscore/underscore',
		'backbone' : 'bower_components/backbone/backbone',

		'marionette' : 'bower_components/marionette/lib/core/amd/backbone.marionette',
	    'backbone.wreqr' : 'bower_components/backbone.wreqr/lib/backbone.wreqr',
	    'backbone.babysitter' : 'bower_components/backbone.babysitter/lib/backbone.babysitter',
			
		'text' : 'bower_components/requirejs-text/text',
		'tpl' : 'bower_components/requirejs-tpl-jcbrand/tpl', 
		'css' : '../css',
		'templates' : 'templates',
				
	},
	
	map: 
	{
		'*': 
		{
	    	'require-css': 'bower_components/require-css/css', //  path to require-css is
		}
	},
	
	separateCSS: true,
	packages: 
	[
		{
			name: 'require-css',
			location: 'bower_components/require-css',
		    main: 'css',
		    siteRoot: '../../'
		}
	],
		
	include: 
	[
		'require-css',
		'app'
	],
	
	shim :
	{
		jquery :
		{
			exports : 'jQuery'
		},
		underscore :
		{
			exports : '_'
		},
		backbone :
		{
			deps : ['jquery', 'underscore'],
			exports : 'Backbone'
		},

	},
	
	catchError : true,
	findNestedDependencies: true

}); 


require(
[
	'app',
	'backbone',
	'routers/main'
], 

function (app, Backbone, Main_Router) 
{
	app.routers.main = new Main_Router();
	app.start();
	
	Backbone.history.start({pushState: app.config.use_push_state});
	Backbone.history.on('route', function()
	{
		ga('send', 'pageview');
	});
});


