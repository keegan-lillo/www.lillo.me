define(function (require)
{	
	var Backbone = require('backbone');
	
	_class = Backbone.Collection.extend(
	{
		fetch : function (args) 
		{
			if (args && args.lazy && this.length)
			{
				return $.Deferred().resolve();
			}
			
			return Backbone.Collection.prototype.fetch.apply(this, arguments);
		}
		
	});
	
	return _class;
});
