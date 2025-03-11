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
$betterScore = FALSE;

$sql = "SELECT PlayedToday, Username FROM Users
WHERE Username = '".$_COOKIE["username"]."'";
echo $sql;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo($row["Username"]);
        if($row["PlayedToday"]){
            $playedToday = $row["Username"]!="ADMIN";
        }
    }
}

if($_COOKIE["signedIn"]==1 and !$playedToday){
    $score = ($_POST["score"]);
    $sql = "UPDATE Users
    SET PlayedToday = true
    WHERE Username = '".$_COOKIE["username"]."'";
    errorCheck($sql, $conn);

    $sql = "SELECT Username, Score FROM Leaderboard
    WHERE Username = '".$_COOKIE["username"]."'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        echo "In leaderboard";
        if($row = $result->fetch_assoc()) {
            if($row["Score"]<$score){
                $sql = "UPDATE Leaderboard
                SET Score = ".$score."
                WHERE Username = '".$_COOKIE["username"]."'";
                errorCheck($sql, $conn);
            }
        }
    }
    else{
        echo "Not in leaderboard";
        $sql = "INSERT INTO Leaderboard (Username, Score)
        VALUES ('".$_COOKIE["username"]."',".$score.")";
        errorCheck($sql, $conn);
    }
    $conn->close();
}

function errorCheck($sql, $conn){
    echo $sql;
    if ($conn->query($sql) === TRUE) {
        echo "Successful";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>