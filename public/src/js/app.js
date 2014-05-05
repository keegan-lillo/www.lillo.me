/*global define */

define(function(require)
{
	// ---------- dependencies --------
	var Marionette = require('marionette');
	var Config = require('config/app');
	var Main_Layout = require('layouts/main');
	var $ = require('jquery');
	
	var app = new Marionette.Application();
		
	// ---------- Boostrap --------
	
	app.config = Config;
	app.routers = {};
	
	app.main_layout = new Main_Layout();
	
	app.addInitializer(function(options)
	{
		console.log('init app');
		
		this.main_layout.render(); 
		this.routers.main.on('route', function(route)
		{
			$("body")
				.removeClass(function(index, css)
				{
					return (css.match(/route-\S+/g) || []).join(' ');
				})
				.addClass('route-'+route);
		}); 


	});

	

	window.App = $.extend(true, {}, app, window.App);

	// console.log(window.App);

	return window.App; 
}); 