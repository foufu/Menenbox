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






        jQuery($=>{
              $('#btn').click(function(){
                   let username = $('#username_logon').val();
                   let password = $('#password_logon').val();

                // 正则验证输入的格式:
                // 判断输入的账号
                if(!/^1[3-9]\d{9}$/.test(username)){
                    alert('昵称只能为手11位数的机号码');
                    return false;
                }

                if(!/^[\da-z]{6,16}$/.test(password)){
                    alert('输入账号或密码有误');
                    return false;
                }


                $.ajax({
                    url:'../api/logon.php',
                    type:'POST',
                    data:{
                        username:username,
                        password:password
                    },
                    success:function(res){
                        console.log(res);
                        if(res === '{status: true}'){
                            window.location.href = '../index.html';

                            document.cookie ="name="+ $('#username_logon').val()+";path=/";
                            // console.log("name="+ $('#username_logon').val()+";path=/");
                                 

                        }
                        if(res === '{status: false}'){
                            window.location.href = 'javascript:';
                        }
                    }
                });
            });
        });





	});

		
    