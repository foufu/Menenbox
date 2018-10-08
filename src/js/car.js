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
		 $('#shou').load("top-header.html #shou");
		$('#header').load("top-header.html #header");
		$('#foot').load("foot.html #foot");
		$('#guanyu').load("foot.html #guanyu");
		$('#guanyu-x').load("foot.html #guanyu-x");
		$('#banquan').load("foot.html #banquan");


		// 导航点击显示隐藏效果
		$(function(){
			$('.h2').click(function(){
				$('.nav2').toggle()
			});
		});




		// 数据传递
		$(function(){
			var obj = {};
			location.search.slice(1).split('&').forEach(item => {
				item = item.split('=');	
				obj[item[0]] = item[1];
			});

			console.log(obj);


			$.ajax({
				url: '../api/car.php',
				method: 'get',
				data: {
					id: obj.id
				},
				success (xhr){		
					// console.log(xhr); 
					//利用eval转数据类型
					var data  = window.eval('('+xhr+')');
					// var data = JSON.parse(xhr);
					console.log(data);
					console.log(data[0].imgurl);
					// 渲染页面


					$('.box .s img').attr('src',data[0].imgurl);  
					$('.box-r h2').text(data[0].name);  
					$('.pr .del').text(data[0].del);
					$('.pr .price').text(data[0].price);
				}

		  });	




			// 点击加减数量
			let qty = $('.shul').val();
			$('.jian').click(function(){
				qty--;
				if(qty <= 1){
					qty = 1;
				}
				$('.shul').val(qty);
				// console.log(666)
			});

			
			$('.jia').click(function(){
				qty++;
				if(qty >= 100){
					qty =100;
					alert('只有100件了');
				}
				$('.shul').val(qty);
				// console.log(666)
			});




			// tab标签切换
			var links =$('.tab-x ul li a');

			for(let i = 0 ; i < links.length; i++) {
					
				links[i].onclick = function(){
					for(let j = 0; j <links.length;j++){

						if(links[j].className != ''){
							links[j].className = '';
						}
						links[i].className = 'li';
					}
					
						
					
					
					
					
					
					
				}

			}


			
	});







});	
    