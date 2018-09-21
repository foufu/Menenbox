//主入口js
//config.js-----
    requirejs.config({
        paths : {
        	//新名字：旧名字
             "jquery": "jquery-1.10.1.min",
        }


    });
    


 //main.js-----
    requirejs(['jquery'],function($){
        //这里的代码等common，moduleA，moduleB，moduleC模块都加载完成后执行
   
		$('#foot').load("foot.html #foot");
		$('#guanyu').load("foot.html #guanyu");
		$('#guanyu-x').load("foot.html #guanyu-x");
		$('#banquan').load("foot.html #banquan");

        
        var isok = false;

        $(function(){
            // 用户名输入框失去焦点时判断// 失去焦点时发起请 求
           $('#username_reg').blur(function(){ 
                // 获取用户名密码
                let username1 = $('#username_reg').val();

                // console.log(username1);
               $.ajax({
                    url:'../api/reg.php',
                    type:'POST',
                    data:{username1:username1},
                    success:function(res){
                        console.log(res);

                        // 正则验证输入的格式:
                        // 判断输入的账号
                        if(!/^1[3-9]\d{9}$/.test(username1)){
                            alert('昵称只能为手11位数的机号码');
                           
                            return false;
                        }


                        if(res === 'yes'){
                           $('#username_reg').css({'border-color':'blue'});
                          
                            // 点击注册时验证及发起请求
                            $('.but a').click(function(){
                                // 获取用户名密码和验证码
                                // let username2 = $('#username_reg').val();
                                let password = $('#password_reg').val();
                                let code = $('#code').val();


                                // 正则验证输入的格式:
                                // 判断输入的账号
                                if(!/^1[3-9]\d{9}$/.test(username1)){
                                    alert('昵称只能为手11位数的机号码');
                                    return false;
                                }

                                if(!/^[\da-z]{6,16}$/.test(password)){
                                    alert('输入账号或密码有误');
                                    return false;
                                }



                                // 请求

                               $.ajax({
                                    url:'../api/reg2.php',
                                    type:'POST',
                                    data:{
                                        username1:username1,
                                        password:password
                                    },
                                    success:function(data){
                                        console.log(data);

                                        if(data === 'success'){
                                          window.location.href = 'logon.html';
                                        }
                                        
                                    }
                                });

                            });

                        }



                        if(res === 'no'){
                             $('#username_reg').css({'border-color':'blue'});
                              isok = false;


                             alert('用户名太受欢迎了');
                        }
                    }
                });

            });



            
        });
        


	});

		
    