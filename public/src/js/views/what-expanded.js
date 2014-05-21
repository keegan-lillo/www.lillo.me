define(function (require)
{
	var Marionette = require('marionette');
	var $ = require('jquery');

	var App = require('app');
	
	var Page_Template = require('tpl!templates/items/portfolio-item-expanded');
	
	var Portfolio_Collection = require('collections/portfolio');
	var Portfolio_Item = require('models/portfolio-item');
	
	_class = Marionette.ItemView.extend(
	{
		template : Page_Template,
		className : 'region-wrap',
		
		model : undefined,
				
		initialize : function(info)
		{
			this.model = this.model || Portfolio_Collection.get(info.id) || new Portfolio_Item({'id' : info.id});
		//	this.model.fetch();
		},
		
		
		onRender : function()
		{
			
			// this.collection.fetch();
		},
		
	});
	
	return _class;
});
