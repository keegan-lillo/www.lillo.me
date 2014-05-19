<?php
/**
 *
 * @package  app
 * @extends  Controller
 */
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
		
		$this->response($data, 200);
	}

}
