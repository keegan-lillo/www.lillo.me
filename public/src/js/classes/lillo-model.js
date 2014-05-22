define(function (require)
{	
	var Backbone = require('backbone');
	
	_class = Backbone.Model.extend(
	{
		fetch : function (args) 
		{
			console.log(this);
			
			if (args && args.lazy && this.id && this.keys().length > 1)
			{
				return $.Deferred().resolve();
			}
			
			return Backbone.Model.prototype.fetch.apply(this, arguments);
		}
		
	});
	
	return _class;
});
