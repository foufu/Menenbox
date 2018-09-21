<?php 
	
	include 'connect.php';

	$id = isset($_GET['id']) ? $_GET['id']:1;

	$sql = "select * from goods where id= '$id'";
	// echo $sql;

	$result = $conn->query($sql);
	
	// var_dump($result);
	// var_dump($result->fetch_all());
	$aa = json_encode($result->fetch_all(MYSQLI_ASSOC),JSON_UNESCAPED_UNICODE);
	
   echo $aa;


?>