define(function (require)
{
	var $ = require('jquery');
	var _ = require('underscore');
	
	var Marionette = require('marionette');
	var App = require('app');
	
	var template = require('tpl!templates/partials/nav');
	
	_class = Marionette.ItemView.extend(
	{
		template : template,
		
		className : 'region-wrap',
		
		events : 
		{
			'click a[href]' : function(ev)
			{
				ev.preventDefault();
				
				App.routers.main.navigate($(ev.currentTarget).attr('href'), {trigger : true});
				
				return false;
				
			}
		},
		
		onRender : function () 
		{
			var $nav_el = this.$el;
			var $nav_el_list = $nav_el.find('ul.nav');
			var $nav_el_placeholder = $nav_el.find('.fixed-placeholder');
			
			this.lazy_scroll =  function (ev) 
			{
				if ($(window).scrollTop() > $nav_el.offset().top) 
				{
		            $nav_el_list.addClass("fixed");
		            $nav_el_placeholder.height($nav_el_list.outerHeight());
		        } 
		        else 
		        {
		        	App.layouts.primary.nav.$el.find('ul.nav').removeClass("fixed");
		        	$nav_el_placeholder.height(0);
		        }
			};
			
			$(window).on('scroll', this.lazy_scroll);
		},
		
		onClose : function () 
		{
			$(window).off('scroll', this.lazy_scroll);
		}
		
	});
	
	return _class;
});
