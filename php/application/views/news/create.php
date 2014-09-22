<h2>Create a news item</h2>


<?php echo validation_errors(); ?>

<div id="dialog" title="popup test">
	<?php echo form_open('news/create'), array('id' => 'form')); ?>

		<label for="title">Title</label>
		<input type="input" name="title" /><br />

		<label for="text">Text</label>
		<textarea name="text"></textarea><br />

		<input type="submit" id="submit" name="submit" value="Create news item" />
	<?php echo form_close(); ?>
</div>