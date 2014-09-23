<?php
class News_model extends CI_Model 
{

	public function __construct()
	{
		$this->load->database();
	}
	
	function insert_account($name, $email, $password)
	{
	echo '<script>alert("You reached your model");</script>';
		$acc['name'] = $name;
		$acc['email'] = $email;
		$acc['password'] = $password;
			
		$this->db->insert('accounts', $acc);
	}
}