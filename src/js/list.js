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
		$('#header').load("top-header.html #header");
		$('#foot').load("foot.html #foot");
		$('#guanyu').load("foot.html #guanyu");
		$('#guanyu-x').load("foot.html #guanyu-x");
		$('#banquan').load("foot.html #banquan");
		$('#shou').load("top-header.html #shou");

		// 导航点击显示隐藏效果
		$(function(){
			$ok = false;
			$('.h2').click(function(){
				if($ok){
					$('.nav2').css('display','block');
					$('#str').css('display','none');
				}else{
					$('.nav2').css('display','none');
					$('#str').css('display','block');
				}

				$ok = !$ok;
				});
			});










		// 列表数据
		$(function(){

			$.ajax({
                url:'../api/list.php',
                type:'POST',
                success:function(data){
                    let res = JSON.parse(data);
                    console.log(res);
                   	




                     function ran(){
                     	 var go = res.map(function(data){
	                   		return `<li>
								<a href="car.html?id=${data.id}"><img src="${data.imgurl}" alt="" /></a>
								<a href="car.html?id=${data.id}"><h4>${data.name}</h4></a>
								<p class="del"><span>${data.del}</span></p>
								<p class="price">￥<span>${data.price}</span></p>
								<a  class="aa" title="加入购物车"  href="javascript:void(0);">加入购物车</a>
	                   		</li>`
		                 }).join('');  

		                  $('.goodslist').html(go);
                     };
                 
                     ran();

                      // 价格排序
                    res = res.sort(function(a,b){
                		return a.price - b.price;
                	});
                    	
                     $('.span').click(function(){
                     	// console.log(res);
                     	 ran();
                    });

                   
           
               }
            });


		});






	});

		
    