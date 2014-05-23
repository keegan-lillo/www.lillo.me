define(function(require)
{
	
	var Config  =
	{
		use_push_state : true,
		
		api_endpoint : 'api/',
		
		what :
		{
			thumbs_dir : 'src/img/portfolio/thumbs/', // include trailing slash
			full_dir : 'src/img/portfolio/full/' // include trailing slash
		}
		
		
	};
	
	return Config;
	
});
