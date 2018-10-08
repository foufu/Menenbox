//主入口js
//config.js-----
    requirejs.config({
        paths : {
        	//新名字：旧名字
             "jquery": "jquery-1.10.1.min"
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

            // 事件委托点击加的时候数量加1
                $('tbody').on('click','.jia',function(){
                      var  $n = $(this).prev().val();// 获取输入框的值

                        $n++;// 点击后加1 
                        if($n >100){ //设置临界值100：库存，大于100则等于100
                            $n = 100;
                        } 
                        $(this).prev().val($n); // 将点击后的值写到输入框
                        pric($(this));// 传参给pric这个函数，并执行这个函数
                       var  $arr = checknum();// 声明$arr变量，接收checknum（）函数
                        allprice($arr); // 执行allprice（）函数，在allprice函数中执行arrchecknum（）接收的函数
                });

                 // 事件委托点击加的时候数量-1
                $('tbody').on('click','.jian',function(){

                    // 获取输入框的值
                   var $j = $(this).next().val();

                    // 点击减1
                    $j--;

                    //判断0界值为1，如果小于1，则等于1
                    if($j <= 1){
                        $j = 1;
                    }

                    // 将点击计算后的值写到输入框
                    $(this).next().val($j);

                    // 传参给pric这个函数，并执行这个函数
                    pric($(this));

                    // 声明$arr变量，接收checknum（）函数
                  var  $arr = checknum();


                    // 执行allprice（）函数，在allprice函数中执行arrchecknum（）接收的函数
                    allprice($arr);
                });






                // 删除单行
                $('tbody').on('click','.del',function(){
                    // confirm提示功能：返回值为true/false
                    // 将返回值赋给$msg
                    $msg = confirm('您确定要删除该行吗？');

                    // 判断$msg确定则删
                    if($msg){
                        $(this).parent().remove();
                    }

                    // 执行updata()这个函数
                     updata(); 

                     //用变量接收checknum();函数
                     var a = checknum();


                     //在allprice函数中执行checknum();函数
                     allprice(a);

                    

                });





                // 封装判断商品是否全部勾选或删除完了临界值
                function updata(){
                    // 判断获取到的.addnum长度如果=0，则把最后删除总价和数量一并删除
                    if($('.jia').length == 0){

                        $('tbody').remove();
                        $('tfoot').remove();
                         $('thead .t1').remove();

                    }
                }




                // 全选
                // 声明$isok为控制开关
                $isok = true;

                // 利用事件委托
                $('thead .allchecked').on('click',function(){
                    //如果全选框的复选框已勾选，则每一行的复选框则勾选
                    if($isok){

                        // 设置全选的复选框勾选上
                        // $('thead input').prop('checked','checked');
                        // 每一行的复选框设置勾选
                        $('tbody input').prop('checked','checked');
                    }else{
                        // 否则删除全选的复选框的勾选
                        $('thead input').removeAttr('checked');
                        //  否则删除每一行的复选框设置勾选
                        $('tbody input').removeAttr('checked');
                    }

                    // 控制if与else两种情况来回执行
                    $isok = !$isok;

                     //用变量接收checknum();函数
                     var b = checknum();

                   
                     //在bllprice函数中执行checknum();函数
                     allprice(b);

                });

                // 全选补充:反选
                $('tbody').on('click','.ttd',function(){
                    // 将checknum()方法赋值给arr
                    var arr = checknum();

                    // 判断arr方法获取到的勾选数量如果等于行的数量
                    if(arr.length == $('.ttd').size()){
                        // 等于：则将全选框勾上
                        $('thead input').prop('checked','checked');
                    }else{
                        // 否则：将全选框勾选去掉
                        $('thead input').removeAttr('checked');
                    }

                    //总价格
                    allprice(arr);

                });



                //封装 勾选的数量
                function checknum(){
                    //声明一个空数组：用来存行的复选框勾选数量
                    $arr = [];
                    // 获取行的长度
                    $len = $('.ttd').size();
                    //遍历行的长度
                    for(var i = 0;i < $len; i++){
                        // 判断行的复选框是否勾选
                        if($('.ttd input').eq(i).prop('checked')){
                            //勾选则添加到$arr数组
                            $arr.push(i);
                            // console.log($arr)
                        }
                    }

                    // 将$arr return出去
                    return $arr;
                };


                  // 封装计算总价
                function allprice(arr){
                    //声明一个值为0
                    $price = 0;
                  
                    for(let i = 0; i < arr.length; i++){
                        console.log(arr[i])
                        //获取总计的值
                         var $pri = $('.total').eq(i).text();
                       console.log($pri)
                        //去掉前后空格
                        $pri = $.trim($pri);
                        console.log($pri);
                        //截取价格数字部分
                        $pri = $pri.substring(1);
                        console.log($pri)
                        //将计算后的值取整赋给$price
                        $price += parseInt($pri);
                        console.log($price)
                    }

                     $('.pp').html('￥&nbsp;'+$price.toFixed(2));
                    //拼接到对应的位置
                    $('.pr span').html('￥&nbsp'+$price.toFixed(2));
                }

  

                 // 封装计算小计
                function pric(now){
                  console.log(now)
                    // 获取单价
                    var pri = now.parent().parent().prev().text();
                  console.log(pri)
                     //去除前后空格
                     pri = $.trim(pri);

                     //截取
                     pri = pri.substring(1);
                      console.log(pri )
                     //获取值
                     // console.log(now.parent().find('input').val())
                     var num = now.parent().find('input').val();
                     // console.log(num)
                     //运算
                     // console.log(pri+'----------'+num);
                     var all = pri * num;
                     // console.log(all);
                     // 将计算好的价格传给小计
                   now.parent().parent().next().html('￥&nbsp;' + all.toFixed(2));   
                }
              


            // 全删
                $('.quanshan').on('click',function(){
                    //声明$arr，用来接收 checknum()方法函数
                    $arr = checknum();

                    // confirm提示功能：返回值为true/false
                    // 将返回值赋给$msg
                   var  $msg = confirm('您确定要删除多行吗？');
                    if($msg){
                        // console.log($arr)
                        for(var i = $arr.length-1; i >= 0; i--){
                            //获取到全删按钮，并删除
                            console.log($('tbody input'))
                            $('tbody input').eq($arr[i]).parent().parent().remove();
                        }

                        //执行updata()函数
                        updata();
                    }

                    // console.log($arr);
                });

              


	});

		
    