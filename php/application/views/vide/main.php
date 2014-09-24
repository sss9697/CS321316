<html>
	<head>
		<style>
			.errorMsg
			{
				display:none;        
				color:Red;
			}
			#logout-btn
			{
				position:absolute;
				top:10;
				right:10;
			}
			#header
			{
				background-color:black;
				color:white;
				text-align:center;
				padding:5px;
			}
			#editordiv
			{
				background-color:#eeeeee;
				height:600px;
				width:250px;
				float:left;
				padding:5px; 
			}
			#playerdiv
			{
				width:350px;
				float:left;
				padding:10px; 
			}
			#controldiv
			{
				background-color:black;
				color:white;
				clear:both;
				text-align:center;
				padding:5px; 
			}
		</style>	
		<link rel="stylesheet" href="//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css">
		<script src="//code.jquery.com/jquery-1.10.2.js"></script>
		<script src="//code.jquery.com/ui/1.11.1/jquery-ui.js"></script>
		
		<script src="<?php echo base_url(). "js/newUser.js" ?>"></script>
		<script src="<?php echo base_url(). "js/signin.js" ?>"></script>
		<script src="<?php echo base_url(). "js/logout.js" ?>"></script>
	
		<title>Visual IDE Group 16</title>
		
		
		
		<div id="newuser-form" title="Create new user">
			<p class="validateTips">All form fields are required.</p>
			<form>
				<fieldset>
					<label for="name">Name:   </label>
					<input type="text" name="name" id="name" value="" class="text ui-widget-content ui-corner-all"><br>
					<label for="email">Email:  </label>
					<input type="text" name="email" id="email" value="" class="text ui-widget-content ui-corner-all"><br>
					<label for="password">Password:</label>
					<input type="password" name="password" id="password" value="" class="text ui-widget-content ui-corner-all"><br>
					<!-- Allow form submission with keyboard without duplicating the dialog button -->
					<input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
				</fieldset>
			</form>
		</div>
		
		<div id="signin-form" title="Sign in">
			<p class="validateTips">All form fields are required.</p>
			<form>
				<fieldset>
					<label for="email">Email:  </label>
					<input type="text" name="email" id="email" value="" class="text ui-widget-content ui-corner-all"><br>
					<label for="password">Password:</label>
					<input type="password" name="password" id="password" value="" class="text ui-widget-content ui-corner-all"><br>
					<label id="noAccoutLabel" class="errorMsg">Email/Password is wrong<br /></label>
					<!-- Allow form submission with keyboard without duplicating the dialog button -->
					<input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
				</fieldset>
			</form>
		</div>
		
		<button id="create-user">New user</button> <button id="validate-user">Sign in</button> <button id="validate-google">Google Sign in</button>
		<button id="logout-btn" style="visibility:hidden" onClick="logoutAction();" type="button">Logout</button>
		
		<div id="maindiv" style="visibility:hidden">
			<div id="header">
				<label id="welcomelabel"></label>
			</div>
			<div id="editordiv">
				EDITOR SPACE
			</div>
			<div id="playerdiv">
				PLAYERSPACE
			</div>
			<div id="controldiv">
				CONTROL SPACE
			</div>		
		</div>
	</head>
</html>