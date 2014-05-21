<?php 

namespace Model;

class Portfolio extends \Model 
{
	protected $_app_config = array();
	
	function __construct()
	{
		$this->_app_config = \Config::get('app');
	}
	
    public function get_items()
    {
    	$data = file_get_contents($this->_app_config['portfolio_data_dir']);
		$data = json_decode($data);
		return $data;
    }

}