define(function (require)
{
	var Marionette = require('marionette');
	var $ = require('jquery');
	
	var App = require('app');
	
	var Item_Template = require('tpl!templates/items/portfolio-item-expanded');	
	
	
	_class = Marionette.ItemView.extend(
	{
		template : Item_Template,
		className : 'portfolio-item',
		tagName : 'section',	
		
		events : 
		{
			'click .expand-btn' : function(ev)
			{
				ev.preventDefault();
				
				this.$('.expanded-content').slideToggle();
				$(ev.currentTarget).toggleClass('open closed');
				
				return false;
			}
		},
		
		initialize : function()	
		{
			// console.log(this);
		},
		
		onRender : function() 
		{
			
		},
		
	});
	
	return _class;
});
