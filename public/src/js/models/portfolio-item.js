define(function (require)
{
	var $ = require('jquery');
	
	var App = require('app');
	
	var LilloModel = require('classes/lillo-model');	
	
	_class = LilloModel.extend(
	{
		urlRoot: App.config.api_endpoint + 'portfolio/',
		
		parse : function(response, options) 
		{
			_.each(response.images, function(item, index, list)
			{
				response.images[index] = 
				{
					'thumb' : App.config.what.thumbs_dir + item.thumb,
					'full' : App.config.what.full_dir + item.full
				};
			});

			return response;
		}
		
	});
	
	return _class;
});
