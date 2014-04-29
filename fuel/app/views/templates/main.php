<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		
		<base href="<?= Uri::base() ?>" />
		
		<title>Keegan Lillo</title>
		<meta name="description" content="" />
		<meta name="author" content="" />
		<meta name="viewport" content="width=810" />
		
		<link rel="shortcut icon" href="<?= Asset::get_file('favicon.ico', 'img') ?>"/>
		
		<!-- =========== CSS =========  -->
		
		<?= Asset::css('screen.css') ?>
		
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
		
		<?= Asset::js('bower_components/requirejs/require.js', array(
			'data-main' => Asset::find_file($app_config['requirejs_main'], 'js'),
			'async' => 'async'
		, 'js')) ?>
		
	</head>
	<body id="body" class="wrapper">
		<div class="main" id="page" >
			 <?= $content; ?>
		</div>
	</body>
</html>
