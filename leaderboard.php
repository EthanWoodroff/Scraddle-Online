<?php
	//https://www.w3schools.com/php/php_mysql_connect.asp
	$servername = "localhost";
	$username = "EthanAdmin";
	$password = "password";
	$databaseName = "scraddle";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $databaseName);

	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	session_start();
	$date = date("d/m/Y");
	if(!isset($_SESSION["date"])){
		$_SESSION["date"] = $date;
	}
	if($_SESSION["date"]!=$date){
		$_SESSION["date"] = $date;
		$sql = "DELETE FROM Leaderboard";
		$conn->query($sql);
	}
?>
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="/style/scraddleStyle.css">
		<link rel="icon" type="image/x-icon" href="/images/favicon.ico">
		<title>SCRADDLE: ONLINE</title>
        <a href="./index.php"> <button id="account">HOME</button> </a>
	</head>
	<body id="body">
        <table>
			<tr> <th>Position</th> <th>Username</th> <th>Score</th> </tr>
			<?php
				$sql = "SELECT * FROM Leaderboard ORDER BY Score DESC";
				$result = $conn->query($sql);
				if ($result->num_rows > 0) {
					// output data of each row
					$counter = 1;
					while($row = $result->fetch_assoc() and $counter<=10) {
						echo "<tr> <th>".$counter."</th> <th>".$row["Username"]."</th> <th>".$row["Score"]."</th> </tr>";
						$counter++;
					}
				}
			?>
        </table>
	</body>
</html>
