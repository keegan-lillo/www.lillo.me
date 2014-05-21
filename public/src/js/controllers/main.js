/*global define */

define(function (require) {
	
	var $ = require('jquery');
	var App = require('app');
	var Loader_View = require('views/loader');
	
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
			
			var Home_View = require('views/home');
		 	App.layouts.primary.main.show(new Home_View);
			
		},
		
		'who' : function() 
		{			
			this._init('who');
			
			var Who_View = require('views/who');
		 	App.layouts.primary.main.show(new Who_View);
		},
		
		'what' : function(id) 
		{			
			this._init('what');
			
			if(id)
			{
				var Portfolio_Model = require('models/portfolio-item');
				var portfolio_item = new Portfolio_Model({'id' : id});
				
				App.layouts.primary.main.show(new Loader_View);
				
				portfolio_item.fetch()
					.done(function()
					{
						var What_Expanded_View = require('views/what-expanded');
						App.layouts.primary.main.show(new What_Expanded_View(
						{
							model : portfolio_item
						}));
					});
				
			}
			else
			{
				var Portfolio_Collection = require('collections/portfolio');
				
				App.layouts.primary.main.show(new Loader_View);
				
				Portfolio_Collection.fetch()
					.done(function()
					{
						var What_View = require('views/what');
						App.layouts.primary.main.show(new What_View(
						{
							collection : Portfolio_Collection
						}));
					});
			}
			
		},
		
		'where' : function() 
		{			
			this._init('where');
			
			var Where_View = require('views/where');
			App.layouts.primary.main.show(new Where_View);
		}
	};
	
	return _class;
});
