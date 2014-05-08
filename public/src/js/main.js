"use strict";

require.config(
{
	waitSeconds : 30,
	
	paths :
	{
		'jquery' : 'bower_components/jquery/dist/jquery',
		'jquery.mobile' : 'libs/jquery.mobile.custom/jquery.mobile.custom',
		
		'underscore' : 'bower_components/underscore/underscore',
		'backbone' : 'bower_components/backbone/backbone',

		'marionette' : 'bower_components/marionette/lib/core/amd/backbone.marionette',
	    'backbone.wreqr' : 'bower_components/backbone.wreqr/lib/backbone.wreqr',
	    'backbone.babysitter' : 'bower_components/backbone.babysitter/lib/backbone.babysitter',
		
		'gumby' : 'bower_components/gumby/js/libs/gumby.min',
		
		'text' : 'bower_components/requirejs-text/text',
		'tpl' : 'bower_components/requirejs-tpl-jcbrand/tpl', 
		'css' : '../css',
		'templates' : '../templates',
				
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
		
		gumby:
		{ 
			deps: ['jquery'],
			exports : 'Gumby'
		},

	},
	
	catchError : true,
	findNestedDependencies: true

}); 


require(
[
	'app',
	'backbone',
	'routers/main',
	'gumby',
	'jquery.mobile'
], 

function (app, Backbone, Main_Router, datgumby) 
{
	app.routers.main = new Main_Router();
	app.start();
	
	Backbone.history.start({pushState: app.config.use_push_state});
});


