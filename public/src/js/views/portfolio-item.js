define(function (require)
{
	var Marionette = require('marionette');
	var $ = require('jquery');
	
	var App = require('app');
	
	var Item_Template = require('tpl!templates/items/portfolio-item');	
	
	
	_class = Marionette.ItemView.extend(
	{
		template : Item_Template,
		className : 'portfolio-item',
		tagName : 'section',	
		
		events : 
		{
			'click a' : function(ev)
			{
				// @TODO adjust to navigate action
				ev.preventDefault();
				
				App.routers.main.navigate($(ev.currentTarget).attr('href'), {trigger : true});
				return false;
			}
		},
		
		initialize : function() {},
		
		onRender : function() 
		{
			
		},
		
	});
	
	return _class;
});
