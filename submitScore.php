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

$playedToday = FALSE;

$sql = "SELECT PlayedToday FROM Users
WHERE Username = '".$_COOKIE["username"]."'";
echo $sql;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        if($row["PlayedToday"]){
            $playedToday = TRUE;
        }
    }
}

if($_COOKIE["signedIn"]==1 and 1){
    $score = ($_POST["score"]);
    $sql = "UPDATE Users
    SET PlayedToday = true
    WHERE Username = '".$_COOKIE["username"]."'";
    echo $sql;
    if ($conn->query($sql) === TRUE) {
        echo "PlayedToday updated successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $sql = "SELECT Username FROM Leaderboard
    WHERE Username = '".$_COOKIE["username"]."'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        echo "In leaderboard";
        $sql = "UPDATE Leaderboard
        SET Score = ".$score."
        WHERE Username = '".$_COOKIE["username"]."'";
        echo $sql;
        if ($conn->query($sql) === TRUE) {
            echo "Inserted successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
    else{
        echo "Not in leaderboard";
        $sql = "INSERT INTO leaderboard (Username, Score)
        VALUES ('".$_COOKIE["username"]."',".$score.")";
        echo $sql;
        if ($conn->query($sql) === TRUE) {
            echo "Inserted successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
    $conn->close();
}
echo $score;
?>