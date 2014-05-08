define(function (require)
{
	var Marionette = require('marionette');
	var Backbone = require('backbone');
	var App = require('app');
	var header_tpl = require('tpl!templates/partials/header');
	var logo_tpl = require('text!templates/partials/logo.html');
	
	var Gumby = require('gumby');
	var $ = require('jquery');
	
	_class = Marionette.ItemView.extend(
	{
		className : 'region-wrap',
			
		template : header_tpl,
		
		model : new Backbone.Model(
		{
			logo : logo_tpl
		}),
		
		
		
		events :
		{
			'click #logo' : function()
			{
				App.routers.main.navigate('/', {trigger : true});
			}
		}
		
	});
	
	return _class;
});
