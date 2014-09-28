<?php
class db_model extends CI_Model 
{

	public function __construct()
	{
		$this->load->database();
	}
	
	public function insert_accountm($name, $email, $password)
	{
		$acc['Name'] = $name;
		$acc['Email'] = $email;
		$acc['Password'] = $password;
		$acc['GoogleAcc'] = 0;
		$acc['DefaultChar'] = "default";
		$acc['DefaultBackground'] = "White";
		$acc['DefaultCharState'] = "1";
			
		$this->db->insert('accounts', $acc);
	}
	
	public function get_accountm($email)
	{
		$this->db->where('Email', $email);
		
		$query = $this->db->get('accounts');
		
		$results = $query->result();
		
		return $results;
	}
}