/*global define */

define(function (require) {
	
	var App = require('app');
	
	var _class = 
	{
		_is_init : false,

		_init: function(options)
		{
			if(this._is_init)
			{
				return;
			}
			
			console.log('init main controller');
			var Header_View = require('views/header');
			var Nav_View = require('views/nav');
			
			App.main_layout.header.show(new Header_View);
		 	App.main_layout.nav.show(new Nav_View);
		 	
		 	this._is_init = true;
		},
		
		onClose : function()
		{
			this._is_init = false;
		},

		'index' : function()
		{
			this._init();
			
			var Home_View = require('views/home');
		 	App.main_layout.main.show(new Home_View);
			
		},
		
		'who' : function(path) 
		{
			console.log('path - who/' + path);
			
			this._init();
			
			var Who_View = require('views/who');
		 	App.main_layout.main.show(new Who_View);
		},
		
		'what' : function(path) 
		{
			console.log('path - what/' + path);
		},
		
		'where' : function(path) 
		{
			console.log('path - where/' + path);
		}
	};
	
	return _class;
});
