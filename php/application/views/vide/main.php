<html>
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" href="<?php echo base_url(). "css/3213.css" ?>" type="text/css">
		<link rel="stylesheet" href="//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css">
		<script src="//code.jquery.com/jquery-1.10.2.js"></script>
		<script src="//code.jquery.com/ui/1.11.1/jquery-ui.js"></script>
		
		<script src="<?php echo base_url(). "js/newUser.js" ?>"></script>
		<script src="<?php echo base_url(). "js/signin.js" ?>"></script>
		
		<script src="<?php echo base_url(). "js/editorView.js" ?>"></script>
		
		<script src="<?php echo base_url(). "js/playerController.js" ?>"></script>
		<script src="<?php echo base_url(). "js/loadController.js" ?>"></script>
		<script src="<?php echo base_url(). "js/btnToggleGridController.js" ?>"></script>
		<script src="<?php echo base_url(). "js/btnLogoutController.js" ?>"></script>
		<script src="<?php echo base_url(). "js/btnClearController.js" ?>"></script>
		<script src="<?php echo base_url(). "js/btnCompileController.js" ?>"></script>
		<script src="<?php echo base_url(). "js/btnSaveController.js" ?>"></script>
		<script src="<?php echo base_url(). "js/commandprocessor.js" ?>"></script>
		<script src="<?php echo base_url(). "js/events.js" ?>"></script>
		
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
		<button id="logout-btn" type="button">Logout</button>
		
		<div id="maindiv">
			<div id="header">
				<label id="welcomelabel"></label>
			</div>
			<div id="editordiv">
				<div id="movecontainer">
					<h1 class="ui-widget-header">Commands</h1>
					<div id="movelist">
						<h2><a href="#">Moves</a></h2>
						<div>
							<ul>
								<li id="moveleft" class="command">
									<div id="movediv">
										left: <input type="number" name="edittxt" id="edittxt" value="1" max="999" min="-999" />
									</div>
								</li>
								<li id="moveright" class="command">
									<div id="movediv">
										right: <input type="number" name="edittxt" id="edittxt" value="1" max="999" min="-999" />
									</div>
								</li>
								<li id="moveup" class="command">
									<div id="movediv">
										up: <input type="number" name="edittxt" id="edittxt" value="1" max="999" min="-999" />
									</div>
								</li>
								<li id="movedown" class="command">
									<div id="movediv">
										down: <input type="number" name="edittxt" id="edittxt" value="1" max="999" min="-999" />
									</div>
								</li>
								<li id="moveloopo" class="command">
									<div id="movediv">
										loop open
									</div>
								</li>
								<li id="moveloopc" class="command">
									<div id="movediv">
										loop close: <input type="number" name="edittxt" id="edittxt" value="1" max="999" min="-999" />
									</div>
								</li>
								<li id="movesetx" class="command">
									<div id="movediv">
										set x: <input type="number" name="edittxt" id="edittxt" value="1" max="999" min="-999" />
									</div>
								</li>
								<li id="movesety" class="command">
									<div id="movediv">
										set y: <input type="number" name="edittxt" id="edittxt" value="1" max="999" min="-999" />
									</div>
								</li>
							</ul>
						</div>
						<h2><a href="#">Other commands</a></h2>
						<div>
							<ul>
								<li id="movechartoggle" class="command">
									<div id="movediv">
										Toggle character
									</div>
								</li>
								<li id="movebackground" class="command">
									<div id="movediv">
										change background
									</div>
								</li>
								<li id="movechangechar" class="command">
									<div id="movediv">
										change char
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div id="editorspace">
					<h1 class="ui-widget-header">Editor</h1>
					<div class="ui-widget-content">
						<ul id="droppable">
							<li class="placeholder">drag command here</li>
						</ul>
					</div>
				</div>
				<div id="editorcontrol" align="center">
					<div id="saveDiv" style="display: none;">
						<label>Save Name:</label><input type="text" placeholder="esc to hide me" id="savename"></input><button id="save-ok-btn">Save</button>
					</div>
					
					<button id="save-btn">Save</button>&nbsp;&nbsp;&nbsp;
					
					<select id="loadList">
					  <option value="" disabled selected>Load</option>
					</select>&nbsp;&nbsp;&nbsp;
					
					<button id="clear-btn">Clear</button>&nbsp;&nbsp;&nbsp;
					<button id="compile-btn">Compile</button>
				</div>
			</div>
			<div id="playerdiv">
				 <img src= "<?php echo base_url(). "img/1.gif" ?> " height="50" width="50" id="sprite"> 
			</div>
			<div id="controldiv">
				<button id="toggleGrid-btn" value="show">Toggle Grid</button>&nbsp;&nbsp;&nbsp;<button id="toggleChar-btn" value="show">Toggle Character</button>&nbsp;&nbsp;&nbsp;<button id="changeDefaultChar-btn">Change default char</button>&nbsp;&nbsp;&nbsp;<button id="changeDefaultBackground-btn">Change default background</button>
			</div>		
		</div>
	</head>
</html>