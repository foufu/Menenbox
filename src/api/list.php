<?php 

	// 引入
	include 'connect.php';


	 //编写sql语句
    $sql = 'select * from goods';

	//获取查询结果集
    $result = $conn->query($sql);

    
    echo json_encode($result->fetch_all(MYSQLI_ASSOC));



?>