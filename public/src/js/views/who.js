define(function (require)
{
	var Marionette = require('marionette');
	var Backbone = require('backbone');
	var template = require('tpl!templates/pages/who');
	
	var $ = require('jquery');
	_class = Marionette.ItemView.extend(
	{
		template : template,
		className : 'region-wrap',
		
		onRender : function()
		{
			
		},
		
	});
	
	return _class;
});
