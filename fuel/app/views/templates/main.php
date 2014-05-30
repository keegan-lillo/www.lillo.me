<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		
		<title><?= $title ?></title>
		<meta name="description" content="Keegan Lillo. Full stack developer with a focus on application architecture. Certified AWS Solutions Architect that loves to make front-end development come alive with cloud infrastructure." />
		<meta name="keywords" content="Keegan Lillo, Full stack developer, PHP, CSS, SASS, AWS, amazon web services" />
		<meta name="author" content="Keegan Lillo">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="shortcut icon" href="<?= Asset::get_file('favicon.ico', 'img') ?>"/>
		
		<base href="<?= Uri::base() ?: $app_config['production_base_url'] ?>" />
		
		<!-- =========== CSS =========  -->
		<link rel="stylesheet" href="<?= Asset::get_file('app.css', 'css').'?v='.$app_version ?>" />
		<?= Asset::css('http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600')?>
		<!-- =========== Javascript =========  -->
		
		<script>
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		
			ga('create', 'UA-51493929-1', 'lillo.me');
		
		</script>
		
		<script>
			window.App = 
			{
				config : 
				{
					base : '<?= Uri::base() ?: $app_config['production_base_url'] ?>',
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
