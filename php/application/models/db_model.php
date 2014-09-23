<?php
class News_model extends CI_Model 
{

	public function __construct()
	{
		$this->load->database();
	}
	
	function insert_account()
	{
		$data = array(
			'name' => 'name',
			'email' => 'email',
			'message' => 'message');
			
			$this->db->insert('accounts', $data);
	}
}