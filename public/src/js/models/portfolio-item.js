define(function (require)
{
	var Backbone = require('backbone');
	var $ = require('jquery');
	
	var App = require('app');
	
	var Item_Template = require('tpl!templates/items/portfolio-item');	
	
	_class = Backbone.Model.extend(
	{
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
