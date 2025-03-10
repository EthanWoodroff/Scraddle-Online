<?php
	//https://www.w3schools.com/php/php_cookies.asp
	if(!isset($_COOKIE["signedIn"])) {
		setcookie("signedIn", false, time() + (86400 * 30), "/");
	  }
	else if($_COOKIE["signedIn"]==1){
		echo "<form method='POST'><button id='signOut' name='signOut' type='submit'>SIGN OUT</button></form>";
		//https://www.geeksforgeeks.org/how-to-call-php-function-on-the-click-of-a-button/
		if(array_key_exists('signOut', $_POST)){
			setcookie("signedIn", false, time() + (86400 * 30), "/");
    		//https://www.w3schools.com/php/php_cookies.asp
		}
		echo "<p id='username'>".$_COOKIE["username"]."</p>";
	}
?>
<!DOCTYPE html>
<html>
	<head>
		<script src="/libraries/dragAndDropTouch.js"></script>
		<!--https://www.npmjs.com/package/drag-drop-touch?activeTab=readme 09:24 27/01/2025-->
		<link rel="stylesheet" href="/style/scraddleStyle.css">
		<link rel="icon" type="image/x-icon" href="/images/favicon.ico">
		
		<title>SCRADDLE: ONLINE</title>
		<div id="title"></div>
	</head>
	<body id="body">
		<a href="./account.php"> <button id="account">ACCOUNT</button> </a>
		<h1 id="title">SCRADDLE: ONLINE</h1>
		<?php
			date_default_timezone_set("Europe/London");
			echo "<p class = \"date\">" . date("d/m/Y") . "</p>";
		?>
		<div id="board"></div>
		<div id="hand"></div>
		<div id="scoreContainer">
			<form id="submitBoard" method="post">
				<input type="hidden" id="words" name="words" value="" readonly required>
				<button id="submit" type="submit">SUBMIT</button>
			</form>
			<p id="totalScore" class="scoring">Score: </p>
		</div>
		<script type="module" src="./scoring.js"></script>
		<script type="module" src="/modules/generateBoard.js"></script>
		<script type="module" src="/modules/dragAndDrop.js"></script>
	</body>
</html>