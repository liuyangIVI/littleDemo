window.onload = function(){
	//获取元素
	var iBtnBox = document.getElementById('iBtnBox');
	var inputBtn = iBtnBox.getElementsByTagName('input');
	var iUl = document.getElementById('iUl');
	var aLis = iUl.getElementsByTagName('li');
	var aImgs = iUl.getElementsByTagName('img');
	var aPs = iUl.getElementsByTagName('p');
	var arrs = [
		['img/1.jpg','1-温馨办公'],
		['img/2.jpg','2-游戏桌面'],
		['img/3.jpg','3-汽车摇滚'],
		['img/4.jpg','4-狭路相逢'],
		['img/5.jpg','5-棒球小子'],
		['img/6.jpg','6-球鞋动力'],
		['img/7.jpg','7-游戏官网'],
		['img/8.jpg','8-指尖社区']
	]
	//当点击从大到小按钮时
	var isTrue = true;
	arrSort();
	inputBtn[0].onclick = function(){
		if(isTrue){
			this.value = '从小到大';
			isTrue = false;
		}
		else{
			this.value = '从大到小';
			isTrue = true;
		}
		arrSort();
	}
	//定义函数
	function arrSort(){
		for(var i=0;i<aImgs.length;i++){
			aImgs[i].src = arrs[i][0];
			aPs[i].innerHTML = arrs[i][1];
		}
		arrs.reverse();
	}
	//当点击打乱函数按钮时
	inputBtn[1].onclick = function(){
		var arrg = [
			['img/1.jpg','1-温馨办公'],
			['img/2.jpg','2-游戏桌面'],
			['img/3.jpg','3-汽车摇滚'],
			['img/4.jpg','4-狭路相逢'],
			['img/5.jpg','5-棒球小子'],
			['img/6.jpg','6-球鞋动力'],
			['img/7.jpg','7-游戏官网'],
			['img/8.jpg','8-指尖社区']
		]
		//为什么用aImgs可以，但是用arrg不行？因为arrg.length是在变化的，在arrg变化的同时i也在变化，当i>arrg.length时条件不成立所以要用aImgs，
		//或者给设置个变量存储arrg.length
		for(var i=0;i<aImgs.length;i++){
			var num = Math.floor(Math.random()*arrg.length);
			aImgs[i].src = arrg[num][0];
			aPs[i].innerHTML = arrg[num][1];
			arrg.splice(num,1);
		}
	}
}
