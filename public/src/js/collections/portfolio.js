define(function (require)
{
	var Backbone = require('backbone');
	var $ = require('jquery');
	var App = require('app');

	_class = Backbone.Collection.extend(
	{
		url: App.config.api_endpoint + 'portfolio/'
		
	});
	
	return _class;
});
