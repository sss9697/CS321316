<?php

class Pages extends CI_Controller {

	public function view($page = 'main')
	{
		if ( ! file_exists(APPPATH.'/views/vide/'.$page.'.php'))
		{
			// Whoops, we don't have a page for that!
			show_404();
		}

		$data['title'] = ucfirst('Visual IDE Main Page'); // Capitalize the first letter

		$this->load->view('pages/'.$page, $data);
	}
}