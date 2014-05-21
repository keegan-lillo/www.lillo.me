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
			
		initialize : function()	{},
		
		onRender : function() {},
		
	});
	
	return _class;
});
