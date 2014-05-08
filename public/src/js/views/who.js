define(function (require)
{
	var Marionette = require('marionette');
	var Backbone = require('backbone');
	var template = require('tpl!templates/pages/who');
	
	var Gumby = require('gumby');
	var $ = require('jquery');
	_class = Marionette.ItemView.extend(
	{
		template : template,
		className : 'region-wrap',
		
		onRender : function()
		{
			console.log(this);
			console.log(Gumby);
			Gumby.touch(function() {
				console.log('touch okay');
			    // bind to swipe event
			    var s = $('section').on('swipe', function() { console.log('touched', arguments); });
			    console.log(s);
			});﻿
		},
		
	});
	
	return _class;
});
