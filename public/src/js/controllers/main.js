/*global define */

define(function (require) {
	
	var $ = require('jquery');
	var App = require('app');
	// var Loader_View = require('views/loader');
	
	var _class = 
	{
		_is_init : false,

		_init: function(route)
		{
			if(this._is_init)
			{
				return;
			}
			
			console.log('init main controller', route);
			var Header_View = require('views/header');
			var Nav_View = require('views/nav');
			
			App.layouts.primary.header.show(new Header_View);
		 	App.layouts.primary.nav.show(new Nav_View);
		 	
		 	this._is_init = true;
		},
		
		onClose : function()
		{
			this._is_init = false;
		},

		'index' : function()
		{
			this._init('index');
			App.layouts.primary.show_loader();
			var Home_View = require('views/home');
		 	App.layouts.primary.main.show(new Home_View);
		 	App.layouts.primary.hide_loader();
			
		},
		
		'who' : function() 
		{			
			this._init('who');
			App.layouts.primary.show_loader();
			var Who_View = require('views/who');
		 	App.layouts.primary.main.show(new Who_View);
		 	App.layouts.primary.scroll_to('nav');
		 	App.layouts.primary.hide_loader();
		},
		
		'what' : function(id) 
		{			
			this._init('what');
			
			var Portfolio_Collection = require('collections/portfolio');
			App.layouts.primary.show_loader();
			
			if(id)
			{
				var Portfolio_Model = require('models/portfolio-item');
				var portfolio_item = Portfolio_Collection.get(id) || new Portfolio_Model({'id' : id});
								
				portfolio_item.fetch({lazy : true})
					.done(function()
					{
						var What_Expanded_View = require('views/what-expanded');
						App.layouts.primary.main.show(new What_Expanded_View(
						{
							model : portfolio_item
						}));
						
						App.layouts.primary.hide_loader();
						App.layouts.primary.scroll_to('nav');
					});
				
			}
			else
			{
				Portfolio_Collection.fetch({lazy : true})
					.done(function()
					{
						var What_View = require('views/what');
						App.layouts.primary.main.show(new What_View(
						{
							collection : Portfolio_Collection
						}));
						
						App.layouts.primary.hide_loader();
						// App.layouts.primary.scroll_to('nav');
					});
			}
			
		},
		
		'where' : function() 
		{			
			this._init('where');
			App.layouts.primary.show_loader();
			var Where_View = require('views/where');
			App.layouts.primary.main.show(new Where_View);
			App.layouts.primary.scroll_to('nav');
			App.layouts.primary.hide_loader();
		}
	};
	
	return _class;
});
