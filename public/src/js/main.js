require.config(
{
	waitSeconds : 30,
	
	paths :
	{
		'jquery' : 'bower_components/jquery/jquery',
		'underscore' : 'bower_components/underscore/underscore',
		'backbone' : 'bower_components/backbone/backbone',
		'marionette' : 'bower_components/marionette/marionette',
		
		'text' : 'bower_components/require/text',
		'css' : '../css',
		'templates' : '../templates',
				
	},
	
	map: 
	{
		'*': 
		{
	    	'require-css': 'libs/require-css/css', //  path to require-css is
		}
	},
	
	separateCSS: true,
	packages: 
	[
		{
			name: 'rcss',
			location: 'libs/require-css',
		    main: 'css',
		    siteRoot: '../'
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
		marionette :
		{
			deps : ['jquery', 'underscore', 'backbone'],
			exports : 'Marionette'
		}
	},
	
	catchError : true,
	findNestedDependencies: true

}); 


require(
[
	'app'
], 


function(App)
{	
	App.init();

});

