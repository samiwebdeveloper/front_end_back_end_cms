<?php

class Contact extends CI_Controller
{

	function __construct()
	{
		parent::__construct();
		date_default_timezone_set('Asia/Karachi');
		$this->load->model('Event_Model');
	}
	// get data  and populate in group edit form
	public function add_contact()
	{
		$data['data_record'] = $this->Event_Model->fetch('nqash_cms.tblcontact');
        
		$this->load->view('add_contact',$data);
	}

	public function insert_contact()
	{
		$this->form_validation->set_rules('Landline', 'Landline', 'required');
		$this->load->library('form_validation');
		if ($this->form_validation->run() == true) {
			$this->Event_Model->Insert_record('nqash_cms.tblcontact', $_POST);
			$this->session->set_flashdata('msg', '<div class="alert alert-success  fade show" role="alert">
			  <strong>Successfully!</strong> Data is  inserted.
			  <button type="button" class="close" data-dismiss="alert">
				<span aria-hidden="true">&times;</span>
			  </button>
			  </div>');
			redirect("contact/add_contact");
		} else {
			$this->session->set_flashdata('msg', '<div class="alert alert-danger  fade show" role="alert">
			  <strong>Successfully!</strong> Data is Not inserted.
			  <button type="button" class="close" data-dismiss="alert">
				<span aria-hidden="true">&times;</span>
			  </button>
			  </div>');
			redirect("contact/add_contact");
		}
	}
}
