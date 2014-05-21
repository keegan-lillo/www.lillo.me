/*global define */

define(function (require) {
	
	var App = require('app');
	
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
		
		'who' : function(path) 
		{
			console.log('path - who/' + path);
			
			this._init('who');
			
			var Who_View = require('views/who');
		 	App.layouts.primary.main.show(new Who_View);
		},
		
		'what' : function(path) 
		{
			console.log('path - what/' + path);
			
			this._init('what');
			
			var What_View = require('views/what');
			App.layouts.primary.main.show(new What_View);
		},
		
		'where' : function(path) 
		{
			console.log('path - where/' + path);
			
			this._init('where');
			
			var Where_View = require('views/where');
			App.layouts.primary.main.show(new Where_View);
		}
	};
	
	return _class;
});
