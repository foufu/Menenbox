<?php

// 引入connect.php
include 'connect.php';

    // 接口功能：验证用户是否存在
    // 所需参数:username
    		// password


    $username = isset($_POST['username1']) ? $_POST['username1'] : null; 
	$password = isset($_POST['password']) ? $_POST['password'] : null; 



     // 查找数据中是否存在同名用户
    $sql = "insert into reg(name,password) values('$username','$password')";


     //获取查询结果集
    $result = $conn->query($sql);


    // 关闭数据库，避免资源浪费
    $conn->close();



     if($result){
        echo "success";
    }else{
        echo "fail";
    }
   


?>