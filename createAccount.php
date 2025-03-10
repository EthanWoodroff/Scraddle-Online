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

    $newUsername = $_POST["newUsername"];
    $newPassword = $_POST["newPassword"];
    $sql = "INSERT INTO Users (Username, Password, PlayedToday)
    VALUES ('".$newUsername."', '".$newPassword."', false)";
    echo $sql;
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }
    $conn->close();
    header("Location: http://localhost");
    //https://stackoverflow.com/questions/768431/how-do-i-make-a-redirect-in-php
    die();
?>