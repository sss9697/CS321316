<?php
class db_model extends CI_Model 
{

	public function __construct()
	{
		$this->load->database();
	}
	
	public function insert_accountm($name, $email, $password)
	{
		echo "MODEL";
		$acc['name'] = $name;
		$acc['email'] = $email;
		$acc['password'] = $password;
			
		$this->db->insert('accounts', $acc);
	}
}