<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		
		<title><?= $title ?></title>
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<meta name="author" content="Keegan Lillo">
		
		<link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
	
		<!-- Facebook Metadata /-->
		<meta property="fb:page_id" content="" />
		<meta property="og:image" content="" />
		<meta property="og:description" content=""/>
		<meta property="og:title" content=""/>
	
		<!-- Google+ Metadata /-->
		<meta itemprop="name" content="">
		<meta itemprop="description" content="">
		<meta itemprop="image" content="">
	
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		
		<base href="<?= Uri::base() ?>" />
		
		
		
		<link rel="shortcut icon" href="<?= Asset::get_file('favicon.ico', 'img') ?>"/>
		
		<!-- =========== CSS =========  -->
		<link rel="stylesheet" href="<?= Asset::get_file('app.css', 'css').'?v='.$app_version ?>" />
		<?= Asset::css('http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600')?>
		<!-- =========== Javascript =========  -->
		
		<script>
			(function(){
				var method, noop = function(){}, methods = [ "assert", "clear", "count", "debug", "dir", "dirxml", 
					"error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", 
					"profile", "profileEnd", "table", "time", "timeEnd","timeStamp", "trace", "warn"],
					length = methods.length, console = (window.console = window.console || {});
				while(length--){ method	= methods[length]; if(!console[method]) console[method] = noop;} 
			}());
		</script>
		
		<script>
			window.App = 
			{
				config : 
				{
					base : '<?= Uri::base() ?>',
					app_version : '<?= $app_version ?>'
				}
			};
		</script>
		
		<script 
			src="<?= Asset::get_file('bower_components/requirejs/require.js', 'js').'?v='.$app_version ?>"
			data-main="<?= Asset::get_file($app_config['requirejs_main'], 'js').'?v='.$app_version ?>"
			async="async"
		></script>
		
	</head>
	<body id="body" class="wrapper route-index">
		<div class="main" id="page" >
			 <?= $content; ?>
		</div>
	</body>
</html>
