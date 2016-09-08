window.onload = function(){
	//获取元素dl和ul
	var oDl = document.getElementsByTagName('dl');
	var oUl = document.getElementsByTagName('ul')[0];
	var startLi = oUl.getElementsByTagName('li');
	//
	for(var i=0;i<startLi.length;i++){
		startLi[i].onclick = function(){
			for(var i=0;i<startLi.length;i++){
				startLi[i].style.cssText = 'background-color: #d3eddb;color: #000;';
			}
			this.style.cssText = 'background-color: #0a7716;color: #fff;';
		}
	}
	//循环所有的dl
	for(var i=0;i<oDl.length;i++){
		//自定义变量存储下标
		oDl[i].index = i;
		//自定义开关：记录dl是否点击状态，默认为true为关闭
		oDl[i].onOff = true;
		//点击当前的dl
		oDl[i].onclick = function(){
			//如果为关闭状态
			if(this.onOff){
				//新建元素li,span
				var getTxt = this.lastElementChild.children[1].innerHTML.substring(0,6)+'...';
				var newLi = document.createElement('li');
				var newSpan = document.createElement('span');
				var newBtn = document.createElement('span');
				//为新建的元素添加属性和样式
				newBtn.innerHTML = 'X';
				newBtn.className = 'btn';
				newLi.className = 'newLi';
				newSpan.innerHTML = getTxt;
				newSpan.className = 'newP';
				//往其父级添加
				newLi.appendChild(newSpan);
				newLi.appendChild(newBtn);
				oUl.appendChild(newLi);
				//把开关变为开启
				this.onOff = false;
				//点击‘X’按钮
				newBtn.onclick = function(){
					//移出当前的li
					oUl.removeChild(this.parentNode);
					//判断li子节点的innerHTML是否==dl子节点的innerHTML，相等的话，点击'X'的时候并把状态变为true（关闭状态）
					for(var i=0;i<oDl.length;i++){
						if(this.parentNode.children[0].innerHTML == oDl[i].lastElementChild.children[1].innerHTML.substring(0,6)+'...'){
							 oDl[i].onOff = true;
						}
					}
				}
				var lis = oUl.children;
				for(var i=3;i<lis.length;i++){
					lis[i].onclick = function(){
						for(var i=3;i<lis.length;i++){
							lis[i].style.cssText = 'background-color: ;color: #000;';
						}
						this.style.cssText = 'background-color: #0a7716;color: #fff;';
					}
				}
			}
			//当用户多次点击dl时候，判断当li有dl的数据，就让当前的li高亮。否则，就把当前li添加Ul里显示
			else{
				var lis = oUl.children;
				//将所有的li，从下标为3的li开始，还原默认样式
				for(var i=3;i<lis.length;i++){
					lis[i].style.cssText = 'background-color: ;color: #000;';
				}
				//用户多次点击，判断当li有dl的数据，就让当前的li高亮
				for(var i=3;i<lis.length;i++){
					if(lis[i].children[0].innerHTML === oDl[this.index].lastElementChild.children[1].innerHTML.substring(0,6)+'...'){
						lis[i].style.cssText = 'background-color: #0a7716;color: #fff;';
					}
				}
				//避免多次添加li，直接return false，直接把状态变为开启
				return this.onOff = false;
			}
		}
	}
}
