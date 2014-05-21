define(function (require)
{
	var Backbone = require('backbone');
	var $ = require('jquery');
	var App = require('app');
	var Portfolio_Model = require('models/portfolio-item');
	
	_class = Backbone.Collection.extend(
	{
		url: App.config.api_endpoint + 'portfolio/',
		model : Portfolio_Model
		
	});
	
	return _class;
});
