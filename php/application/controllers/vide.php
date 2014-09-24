<?php

class Vide extends CI_Controller 
{
	public function __construct()
	{
		parent::__construct();
		$this->load->model('db_model');
	}

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
	
	public function insert_account()
	{
		if ($this->input->post("email") != "")
		{
			
			$this->db_model->insert_accountm(	$this->input->post('name'),
												$this->input->post('email'),
												$this->input->post('password')
											);
		}
	}
	
	public function get_account()
	{
		if ($this->input->post("email") != "")
		{
			$query = $this->db_model->get_accountm(	$this->input->post('email') );
			$password = $this->input->post('password');
			
			$data['pass'] = $query['password'];
			if($data == $password)
			{
				header('Content-Type: application/json');
				echo json_encode($query);
			}
			else
			{	
				$empty = new stdClass();
				echo json_encode($empty);
			}
		}
	}
}