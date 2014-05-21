define(function (require)
{
	var Marionette = require('marionette');
	var App = require('app');
	var template = require('tpl!templates/partials/nav');
	
	_class = Marionette.ItemView.extend(
	{
		template : template,
		
		className : 'region-wrap',
		
		events : 
		{
			'click a[href]' : function(ev)
			{
				ev.preventDefault();
				
				App.routers.main.navigate($(ev.currentTarget).attr('href'), {trigger : true});
				
				return false;
				
			}
		}
		
	});
	
	return _class;
});
