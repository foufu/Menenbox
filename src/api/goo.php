<?php 
	
	include 'connect.php';

	$id = isset($_GET['id']) ? $_GET['id']:1;
	$name = isset($_GET['name']) ? $_GET['name']:1;
	$del = isset($_GET['del']) ? $_GET['del']:1;
	$price = isset($_GET['price']) ? $_GET['price']:1;
	$imgurl = isset($_GET['imgurl']) ? $_GET['imgurl']:1;
	$qty = isset($_GET['qty']) ? $_GET['qty']:1;

	$sql = "insert into goo(name,del,price,imgurl) values('$name','$del','$price','$imgurl','$qty')";
	echo $sql;

	$result = $conn->query($sql);
	
	// var_dump($result);
	// var_dump($result->fetch_all());
	$aa = json_encode($result->fetch_all(MYSQLI_ASSOC),JSON_UNESCAPED_UNICODE);
	
   echo $aa;


?>