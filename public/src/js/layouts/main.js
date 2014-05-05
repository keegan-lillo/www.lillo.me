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
		}
	}); 

	
	return _class;
});
