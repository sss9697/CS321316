<?php
class News_model extends CI_Model 
{

	public function __construct()
	{
		$this->load->database();
	}
	
	public function insert_account($name, $email, $password)
	{
		$acc['name'] = $name;
		$acc['email'] = $email;
		$acc['password'] = $password;
			
		$this->db->insert('accounts', $acc);
	}
}