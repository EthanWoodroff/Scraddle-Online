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
			<p id="TEST" class="scoring"> testing </p>
			<p id="totalScore" class="scoring">Score: </p>
			<p id="scores" class="scoring">Words: </p>
		</div>
		<script type="module" src="./formHandler.js"></script>
		<script type="module" src="./scoring.js"></script>
		<script type="module" src="./generateBoard.js"></script>
		<script type="module" src="/modules/dragAndDrop.js"></script>
	</body>
</html>