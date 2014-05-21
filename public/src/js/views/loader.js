define(function (require)
{
	var Marionette = require('marionette');	
	var Loader_Template = require('tpl!templates/partials/loader');

	_class = Marionette.ItemView.extend(
	{
		template : Loader_Template,
		className : 'region-wrap',
		
	});
	
	return _class;
});
