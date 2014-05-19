<?php
return array(
	'_root_'  => 'main/index',  // The default route
	'_404_'   => 'errors/404',    // The main 404 route
	
	'who' => 'main/index/who',
	'what' => 'main/index/what',
	'where' => 'main/index/where',
	
	'who/(:path)' => 'main/index',
	'what/(:path)' => 'main/index',
	'where/(:path)' => 'main/index',
	
	''
	
);