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

    $usernameInput = $_POST["usernameInput"];
    $passwordInput = $_POST["passwordInput"];
    $sql = "SELECT Username, Password FROM users
    WHERE Username = '".$usernameInput."'";
    echo $sql;
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
          echo $row["Password"];
        }
        setcookie("signedIn", true, time() + (86400 * 30), "/");
        setcookie("username", $usernameInput, time() + (86400 * 30), "/");
    }
    else {
        header("Location: http://localhost/account.php");
      }
    //https://www.w3schools.com/php/php_cookies.asp
    $conn->close();
    header("Location: http://localhost");
    //https://stackoverflow.com/questions/768431/how-do-i-make-a-redirect-in-php
    die();
?>