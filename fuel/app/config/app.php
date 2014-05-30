<?php

return array(
	'app_version' => (isset($_SERVER['APP_VERSION']) ? $_SERVER['APP_VERSION'] : 'dev'),
	'requirejs_main' => 'main-min.js',
	'portfolio_data_dir' => DOCROOT.'../assets/data/portfolio.json',
	'api_response_delay' => 0,
	'production_base_url' => 'http://lillo.me/'
);
