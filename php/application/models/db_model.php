<?php
class News_model extends CI_Model 
{

	public function __construct()
	{
		$this->load->database();
	}
	
	function insert_account()
	{
	echo '<script>alert("You reached your model");</script>';
		$data = array(
			'name' => 'name',
			'email' => 'email',
			'message' => 'message');
			
			$this->db->insert('accounts', $data);
	}
}