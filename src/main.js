//主入口js
//config.js-----
    requirejs.config({
        paths : {
        	//新名字：旧名字
             "jquery": "js/jquery-1.10.1.min",
              "index":"js/index",
              "banner":"lib/jqueryimggd/js/mySystem"
        },
        shim:{
            'index':{
                deps:["jquery"]
            },
            'banner':{
                deps: ["jquery"]
            }          
        }

    });
    


 //main.js-----
    requirejs(['jquery',"index","banner"],function($){
        //这里的代码等common，moduleA，moduleB，moduleC模块都加载完成后执行
        //但不保证以上模块的加载顺序
        // $('#shou').load("html/top-header.html #shou");







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
                // console.log(kit);
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
           
       
       


    // 轮播图
    $(function(){
        //回调函数计数
        var callbackIndex = 0;
        $('.silder-box-1').mySilder({
            width:500, //容器的宽度 必选参数!!!!!!
            height:400, //容器的高度 必选参数!!!!!!
            auto:true,//是否自动滚动
            autoTime:5, //自动滚动时，时间间隙，即多长滚动一次,单位(秒)
            direction:'x',//滚动方向,默认X方向
            autoType:'left', //滚动方向，auto为true时生效
            few:1,//一次滚动几个，默认滚动1张
            showFew:2, //显示几个,就不用调css了,默认显示一个
            clearance:50, //容器之间的间隙，默认为 0
            silderMode:'linear' ,//滚动方式
            timeGap:350,//动画间隙，完成一次动画需要多长时间，默认700ms
            buttonPre:'.silder-button.btl',//上一个，按钮
            buttonNext:'.silder-button.btr',//下一个，按钮
            jz:true, //点击时，是否等待动画完成
            runEnd:function(){//回调函数
                callbackIndex ++ ;
                $('.cj em').text(callbackIndex);
            }
        });

    });
}); 