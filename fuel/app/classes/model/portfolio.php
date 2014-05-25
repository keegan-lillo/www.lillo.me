<?php 

namespace Model;

class Portfolio extends \Model 
{
	protected $_app_config = array();
	
	function __construct()
	{
		$this->_app_config = \Config::get('app');
	}
	
    public function get_items($id = null)
    {
    	$data = file_get_contents($this->_app_config['portfolio_data_dir']);
		$data = json_decode($data, TRUE);
		
		if($id)
		{
			$data = \Arr::filter($data, 'id', $id);
			$data = $data[0];
		}
		
		return $data;
    }
	
	public function get_data_date_modified()
	{
		return filemtime($this->_app_config['portfolio_data_dir']);
	}

}