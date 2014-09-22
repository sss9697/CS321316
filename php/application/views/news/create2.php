<div id="container">
	<?php echo form_open('submit_ctrl',array('id'=>'form')); ?>
	<h1>Submit CodeIgniter Form Using jQuery</h1>
	<?php echo form_label('Name :'); ?> <?php echo form_error('dname'); ?>
	<?php echo form_input(array('id' => 'dname', 'name' => 'dname')); ?>
	<?php echo form_label('Email :'); ?> <?php echo form_error('demail'); ?>
	<?php echo form_input(array('id' => 'demail', 'name' => 'demail')); ?>
	<?php echo form_label('Mobile No. :'); ?> <?php echo form_error('dmobile'); ?>
	<?php echo form_input(array('id' => 'dmobile', 'name' => 'dmobile')); ?>
	<?php echo form_label('Address :'); ?> <?php echo form_error('daddress'); ?>
	<?php echo form_input(array('id' => 'daddress', 'name' => 'daddress')); ?>
	<?php echo ('<p id="submit">Submit</p>'); ?>
	<?php echo form_close(); ?>
</div>