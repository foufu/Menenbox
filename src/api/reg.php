<?php
	// 引入公共
	include 'connect.php';

	/*
		接口功能：验证用户名是否存在
		所需参数：
			* username
	 */
	$username = isset($_POST['username1']) ? $_POST['username1'] : null;

	// echo $username;
	// 查找数据库中是否存在同名用户
	$sql = "select * from reg where name ='$username'";
	// echo $sql;
	// 执行sql语句
	$result = $conn->query($sql);

	if($result->num_rows > 0){
		echo "no";
	}else{
		echo "yes";
	
	}
	
    //释放查询结果集，避免资源浪费
    $result->close();

    // 关闭数据库，避免资源浪费
    $conn->close();



?>