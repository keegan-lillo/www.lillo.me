define(function (require)
{
	var Marionette = require('marionette');
	var template = require('tpl!templates/pages/where');
	
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
