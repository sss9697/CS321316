function defaultCharf(value)
{
	alert(value);
	$("#placeholderSprite").attr("src","<?php echo base_url(). \"img/"+value+".gif\" ?>");
}
