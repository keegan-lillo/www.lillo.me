/*global define */

define(function(require)
{
	// ---------- dependencies --------
	var Marionette = require('marionette');
	var Backbone = require('backbone');
	var Config = require('config/app');
	var Primary_Layout = require('layouts/primary');
	var $ = require('jquery');
	
	var app = new Marionette.Application();
		
	// ---------- Boostrap --------
	
	app.config = Config;
	
	app.routers = {};
	app.collections = {};
	app.layouts = {};
	
	app.set_page = function(title)
	{
		document.title = title;
		ga('send', 'pageview', Backbone.history.getFragment()); 
	};
	
	app.layouts.primary = new Primary_Layout();
	
	app.addInitializer(function(options)
	{		
		this.layouts.primary.render(); 
	});

	

	window.App = $.extend(true, {}, app, window.App);
	
	return window.App; 
}); 