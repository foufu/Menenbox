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
        //但不保证以上模块的加载顺序
		 $("#top").load("top-header.html #top");
		
		$('#foot').load("foot.html #foot");
		$('#guanyu').load("foot.html #guanyu");
		$('#guanyu-x').load("foot.html #guanyu-x");
		$('#banquan').load("foot.html #banquan");






	});

		
    