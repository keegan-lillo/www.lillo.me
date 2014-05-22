define(function (require)
{
	var LilloCollection = require('classes/lillo-collection');
	var $ = require('jquery');
	var App = require('app');
	var Portfolio_Model = require('models/portfolio-item');
	
	_class = LilloCollection.extend(
	{
		url: App.config.api_endpoint + 'portfolio/',
		model : Portfolio_Model
		
	});

	return new _class();
});
