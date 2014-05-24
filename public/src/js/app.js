/*global define */

define(function(require)
{
	// ---------- dependencies --------
	var Marionette = require('marionette');
	var Config = require('config/app');
	var Primary_Layout = require('layouts/primary');
	var $ = require('jquery');
	
	var app = new Marionette.Application();
		
	// ---------- Boostrap --------
	
	app.config = Config;
	
	app.routers = {};
	app.collections = {};
	app.layouts = {};
	
	app.layouts.primary = new Primary_Layout();
	
	app.addInitializer(function(options)
	{
		console.log('init app');
		
		this.layouts.primary.render(); 


	});

	

	window.App = $.extend(true, {}, app, window.App);

	// console.log(window.App);

	return window.App; 
}); 