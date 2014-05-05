define(function (require)
{
	var Marionette = require('marionette');
	var Backbone = require('backbone');
	var template = require('tpl!templates/pages/who');
	
	_class = Marionette.ItemView.extend(
	{
		template : template
		
	});
	
	return _class;
});
