<?php

/**
 * The welcome 404 view model.
 *
 * @package  app
 * @extends  ViewModel
 */
class View_Main_404 extends ViewModel
{
	/**
	 * Prepare the view data, keeping this in here helps clean up
	 * the controller.
	 *
	 * @return void
	 */
	public function view()
	{
		$this->title = "Well this is awkward...";
	}
}
