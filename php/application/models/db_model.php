<?php
class db_model extends CI_Model 
{

	public function __construct()
	{
		$this->load->database();
	}
	
	public function insert_accountm($name, $email, $password)
	{
		$acc['name'] = $name;
		$acc['email'] = $email;
		$acc['password'] = $password;
		$acc['curx'] = 0;
		$acc['cury'] = 0;
		$acc['costume'] = "default";
		$acc['moveset'] = "";
			
		$this->db->insert('accounts', $acc);
	}
	
	public function get_accountm($email)
	{
		$this->db->where('email', $email);
		
		$query = $this->get('accounts');
		
		$results = $query->result();
		
		return $results;
	}
}