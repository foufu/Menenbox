// $("#top").load("top-header.html #top");
// $('#header').load("top-header.html #header");
// $('#foot').load("foot.html #foot");
// $('#guanyu').load("foot.html #guanyu");
// $('#guanyu-x').load("foot.html #guanyu-x");
// $('#banquan').load("foot.html #banquan");












// man部分
$(function(){

	var goods = [{
	        id:'01',
	        name1:'英文名',
	        name2:'抢完啦',
	        imgurl:'images/g1.png',
	        price:5899.00,
	        sale:555.00,
	        prov:10.00,
	         go:'加入购物车'
	     },
	     {
	        id:'02',
	        name1:'英文名',
	        name2:'我爱化妆',
	        imgurl:'images/g2.png',
	        price:9999.00,
	        sale:888.00,
	        prov:10.00,
	         go:'加入购物车'
	     },{
	        id:'03',
	        name1:'英文名',
	        name2:'我爱化妆',
	        imgurl:'images/g3.png',
	        price:777.00,
	        sale:888.00,
	        prov:10.00,
	         go:'加入购物车'
	     },{
	        id:'04',
	        name1:'英文名',
	        name2:'好物',
	        imgurl:'images/g4.png',
	        price:5899.00,
	        sale:888.00,
	        prov:10.00,
	        go:'加入购物车'
	     }]; 

	    let man = document.querySelector('#man');
	    let u = document.createElement('ul');
	     // console.log(u);

	      u.innerHTML = goods.map(function(data,idx){
	        return `<li data-guid="${data.id}">
				<a href="#"><img src="${data.imgurl}" alt="" /></a>
				<div class="div">
					<p class="price1">￥<span>${data.price.toFixed(2)}</span></p>
					<div class="r">
						<p class="price">￥<span>${data.price.toFixed(2)}</span></p>
						<p class="prov">立省￥<span>${data.prov}</span></p>
					</div>
					
				</div>
				<button><a href="">${data.go}</a></button>
	        </li>` }).join('\n');
	    

	     man.appendChild(u);
	    

})



