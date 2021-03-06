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
		$acc['DefaultChar'] = "1";
		$acc['DefaultBackground'] = "#cccccc";
			
		$this->db->insert('accounts', $acc);
	}
	
	public function get_accountm($email)
	{
		$this->db->where('Email', $email);
		
		$query = $this->db->get('accounts');
		
		$results = $query->result();
		
		return $results;
	}
	
	public function insert_movem($PID, $Name, $Moveset)
	{
		$acc['PID'] = $PID;
		$acc['Name'] = $Name;
		$acc['Moveset'] = $Moveset;
			
		$this->db->insert('saves', $acc);
	}
	
	public function get_movem($PID)
	{
		$this->db->where('PID', $PID);
		
		$query = $this->db->get('saves');
		
		$results = $query->result();
		
		return $results;
	}
	
	public function delete_movem($PID, $Name)
	{
		$this->db->where('Name', $Name);
		$this->db->where('PID', $PID);
		$this->db->delete('saves');
	}
	
	public function update_backgroundm($PID, $DefaultBackground)
	{
		$this->db->where('ID', $PID);
		$acc['DefaultBackground'] = $DefaultBackground;
		$this->db->update('accounts', $acc); 
	}
	
	public function update_characterm($PID, $DefaultCharacter)
	{
		$this->db->where('ID', $PID);
		$acc['DefaultChar'] = $DefaultCharacter;
		$this->db->update('accounts', $acc); 
	}
	
	public function google_checkm($Email)
	{
		$this->db->where('Email', $Email);
		$this->db->where('GoogleAcc', 1);
		
		$query = $this->db->get('accounts');
		
		$results = $query->result();
		
		return $results;
	}
	
	public function google_signupm($email, $name)
	{
		$acc['Name'] = $name;
		$acc['Email'] = $email;
		$acc['Password'] = null;
		$acc['GoogleAcc'] = 1;
		$acc['DefaultChar'] = "1";
		$acc['DefaultBackground'] = "#cccccc";
			
		$this->db->insert('accounts', $acc);
	}
}