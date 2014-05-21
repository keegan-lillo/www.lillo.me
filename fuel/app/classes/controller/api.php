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
    }
	
	public function get_portfolio()
	{
		$portfolio = new Portfolio();
		$data = $portfolio->get_items();
		
		$this->response($data, 200); 
	}

} 
