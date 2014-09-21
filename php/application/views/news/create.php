<h2>Create a news item</h2>

<?php echo isset($script_head) ? $script_head : ''; ?>

<?php echo validation_errors(); ?>

<div id="dialog" title="popup test">
<?php echo form_open('news/create') ?>

	<label for="title">Title</label>
	<input type="input" name="title" /><br />

	<label for="text">Text</label>
	<textarea name="text"></textarea><br />

	<input type="submit" name="submit" value="Create news item" />
	
<?php echo isset($library_src) ? $library_src : ''; ?>
<?php echo isset($script_foot) ? $script_foot : ''; ?>

</form>
</div>