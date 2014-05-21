define(function (require)
{
	var Marionette = require('marionette');
	var $ = require('jquery');

	var App = require('app');
	
	var Page_Template = require('tpl!templates/pages/what');	
	var Portfolio_ItemView = require('views/portfolio-item');
	
	
	
	_class = Marionette.CompositeView.extend(
	{
		template : Page_Template,
		className : 'region-wrap',
		
		itemViewContainer : '.portfolio-container',
		itemView : Portfolio_ItemView,
				
		initialize : function()
		{
			
		},
		
		
		onRender : function()
		{
			// this.collection.fetch();
			// console.log('collection', this.collection);
		},
		
	});
	
	return _class;
});
