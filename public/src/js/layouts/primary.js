define(function(require)
{
	var Marionette = require('marionette');
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
			var target_top = this[region].$el.offset().top;

			if($(window).scrollTop() > target_top)
			{
				$('html, body').scrollTop(target_top);
				// $html_body.animate({ scrollTop: target_top}, 'fast');
			}
			
		},
		
		show_loader : function () 
		{
			this.$('#main-loader').removeClass('hide');
		},
		
		hide_loader : function () 
		{
			this.$('#main-loader').addClass('hide');
		}
	}); 

	
	return _class;
});
