<?php 
	// 引入
	include 'connect.php';

	$username = isset($_POST['username']) ? $_POST['username']:null;
	$password = isset($_POST['password']) ? $_POST['password']:null;

	// echo $username,$password;

	$sql = "select * from reg where name='$username' and password='$password'";
	// echo $sql;

	
     //获取查询结果集
    $result = $conn->query($sql);
    // echo $result;


	$row = $result->fetch_all(MYSQLI_ASSOC);

	if(count($row) > 0){
	    $_SESSION['name'] = $username;
	    echo "{status: true}";
	} else {
	    echo "{status: false, message: 'username or password error'}";
	}

	$result->free(); //释放内存
	$conn->close();






?>