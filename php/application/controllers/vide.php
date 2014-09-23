<?php

class Vide extends CI_Controller 
{
	public function view($page = 'main')
	{
		if ( ! file_exists(APPPATH.'/views/vide/'.$page.'.php'))
		{
			// Whoops, we don't have a page for that!
			show_404();
		}

		$data['title'] = ucfirst($page); // Capitalize the first letter

		$this->load->view('vide/'.$page, $data);
	}
	
	function insert_account()
	{
		$this->load->model('db_model');
		$this->load->helper('form');
		
		if ($this->input->post("email") != "")
		{
			$this->db_model->insert_account(	$this->input->post('name'),
												$this->input->post('email'),
												$this->input->post('password')
											);
			echo '<script>alert("You reached your controllers SUCCESS");</script>';
		}
		else
		{
			echo '<script>alert("You reached your controller ERROR");</script>';
		}
	}
}