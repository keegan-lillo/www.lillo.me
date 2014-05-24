define(function(require)
{
	var Marionette = require('marionette');
	var $ = require('jquery');
	var main_tpl = require('tpl!templates/layouts/main');
	
	var _class = Marionette.Layout.extend(
	{
		template : main_tpl,
		
		el : '#page',
				
		regions :
		{
			header : '#main-header',
			nav : '#main-nav',
			main : '#main-main'
		},
		
		scroll_to : function (region) 
		{
			var target_top = this[region].$el.offset().top + 1;

			if($(window).scrollTop() > target_top)
			{
				$('html, body').scrollTop(target_top);
			}
			
		},
		
		show_loader : function () 
		{
			var anim_status = $.Deferred();
			
			this.$('#main-loader').fadeIn(250);
			this.$('#main-main').fadeTo(150, 0, function()
			{
				anim_status.resolve();
			});
			
			return anim_status;
		},
		
		hide_loader : function () 
		{
			var anim_status = $.Deferred();
			
			this.$('#main-loader').delay(250).fadeOut(500);
			this.$('#main-main').fadeTo(350, 1, function()
			{
				anim_status.resolve();
			});
			
			return anim_status;
		}
	}); 

	
	return _class;
});
