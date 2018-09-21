//主入口js
//config.js-----
    requirejs.config({
        paths : {
        	//新名字：旧名字
             "jquery": "js/jquery-1.10.1.min",
              "index":"js/index"
        },
        shim:{
            'index':{
                deps:["jquery"]
            }
          
        }


    });
    


 //main.js-----
    requirejs(['jquery',"index"],function($){
        //这里的代码等common，moduleA，moduleB，moduleC模块都加载完成后执行
        //但不保证以上模块的加载顺序
        $('#shou').load("html/top-header.html #shou");







        // 获取cookie：判断用户是否再登录状态
        // console.log(document.cookie);
        $(function(){
             // 获取到所有的cookie（字符串）
            var cookies = document.cookie;
            // console.log(cookies);

            // 字符串拆数组
            cookies = cookies.split('; ');
            // console.log(cookies);

            // 遍历数组
            cookies.forEach(function(item){
                // 拆分name/value
                var kit = item.split('=');
                console.log(kit);
                // 找到name
                if(kit[0] === 'name'){
                    let tt = [kit[0]] = kit[1];
                    // console.log(tt);
                     let a = document.querySelector('#top .tui a');
                     a.innerText = tt;
                    ;
                }else{
                    
                }
            });
 
        });
           
       
       




        
    }); 