<?php

class submit_ctrl extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('submit_model');
       
    }

    function index()
	{   
		//including validation library
 $this->load->library('form_validation');

//displaying errors in div
 $this->form_validation->set_error_delimiters('<div class="error">', '</div>');

//validation for name field
 $this->form_validation->set_rules('dname', 'Username', 'required|min_length[5]|max_length[15]');

//validation for email field
 $this->form_validation->set_rules('demail', 'Email', 'required|valid_email');

//validation for contact field
 $this->form_validation->set_rules('dmobile', 'Contact No.', 'required|regex_match[/^[0-9]{10}$/]');

//validation for address field
$this->form_validation->set_rules('daddress', 'Address', 'required|min_length[10]|max_length[50]');

 if ($this->form_validation->run() == FALSE)
 {
 $this->load->view('submit_view');
 }
 else
 {
//Initializing database table columns
 $data = array(
 'Student_Name' => $this->input->post('dname'),
 'Student_Email' => $this->input->post('demail'),
 'Student_Mobile' => $this->input->post('dmobile'),
 'Student_Address' => $this->input->post('daddress')
 );

//Calling Insert Model and its function
 $this->submit_model->form_insert($data);
 echo "<script>alert('Form Submitted Successfully....!!!! ');</script>";

//Reloading after submit 
 $this->load->view('submit_view');
 }
 }
}


?>