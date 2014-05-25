<?php
/**
 *
 * @package  app
 * @extends  Controller
 */
class Controller_Main extends Controller_Template
{
	
	public $template = 'templates/main';
	
	protected $_app_config = array();
	
	public function before()
    {
        parent::before();
		
		$this->_app_config = Config::get('app');
		$this->template->set_global('app_config', $this->_app_config);
    }
	
	/**
	 * The basic welcome message
	 *
	 * @access  public
	 * @return  Response
	 */
	public function action_index($path = 'home')
	{
		$this->template->api_version = \Controller_Api::get_api_version();
		
		$path = $this->param('path', $path);
		Profiler::console($path);
		
		$this->template->title = 'Keegan Lillo - Full Stack Developer';
        $this->template->content = View::forge('main/index');
	}

}
