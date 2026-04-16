<?php
$host="localhost";
$user="root";
$pass="";
$db="UMS";

$conn = mysqli_connect($host,$user,$pass,$db, null, '/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock');

if(!$conn){
	die("connection failed:".mysqli_connect_error());
}

?>