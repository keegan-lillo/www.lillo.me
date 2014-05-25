<?php
/**
 *
 * @package  app
 * @extends  Controller
 */
 
 use \Model\Portfolio;
 
class Controller_Api extends Controller_Rest
{
		
	protected $_app_config = array();
	
	public function before()
    {
        parent::before();
		
		$this->_app_config = Config::get('app');
		
		sleep($this->_app_config['api_response_delay'] OR 0);
    }
	
	public function get_portfolio($id = null)
	{		
		$portfolio = new Portfolio();
		$data = $portfolio->get_items($id);
		
		$this->response($data, 200); 
	}
	
	public static function get_api_version()
	{
		$portfolio = new Portfolio();
		return $portfolio->get_data_date_modified();
	}

} 
