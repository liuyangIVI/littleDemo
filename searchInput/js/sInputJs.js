window.onload = function(){
	//获取元素
	var oCharP = document.getElementById('oCharP');
	var oList = document.getElementById('oList');
	var oListSea = document.getElementById('oListSea');
	var oListChan = document.getElementById('oListChan');
	var oChangeBox = document.getElementById('oChangeBox');
	var oChange = document.getElementById('oChange');
	var oSearch = document.getElementById('oSearch');
	var oInputS = document.getElementById('oInputS');
	var oInputC = document.getElementById('oInputC');
	var oCloseBtn = document.getElementById('oCloseBtn');
	var oInputSText = document.getElementById('oInputSText');
	var oInputSBtn = document.getElementById('oInputSBtn');
	var oInputCbtn = document.getElementById('oInputCbtn');
	var oInputCText1 = document.getElementById('oInputCText1');
	var oInputCText2 = document.getElementById('oInputCText2');
	var iSpan = document.getElementById('iSpan');
	var oldStr = oCharP.innerHTML;
	var newString = '';
	//当点击展开按钮时,显示查找和替换按钮
	var onOff = true;
	oList.onclick = function(){
		if(onOff){
			oListSea.className = 'disBlock';
			oListChan.className = 'disBlock';
			onOff = false;
		}
		else{
			oListSea.className = 'disHidden';
			oListChan.className = 'disHidden';
			onOff = true;
		}
	}
	oListSea.onclick = showInputBox;
	oListChan.onclick = showInputBoxs;
	function showInputBox(){
		oChangeBox.style.display = 'block';
		oSearch.className = 'oChooseStyle';
		oChange.className = '';
		oInputS.style.display = 'block';
		oInputC.style.display = 'none';
	}
	function showInputBoxs(){
		oChangeBox.style.display = 'block';
		oSearch.className = '';
		oChange.className = 'oChooseStyle';
		oInputS.style.display = 'none';
		oInputC.style.display = 'block';
	}
	//当鼠标移入查找按钮时，改变该按钮的样式
	oListSea.onmouseover = function(){
		oListSea.className = 'oListStyle';
		oListChan.className ='';
	}
	//当鼠标移入替换按钮时，改变替换按钮的样式
	oListChan.onmouseover = function(){
		oListChan.className = 'oListStyle';
		oListSea.className = '';
	}
	//当点击关闭按钮时，关闭当前的div
	oCloseBtn.onclick = function(){
		oChangeBox.style.display = 'none';
		oListSea.className = 'disHidden';
		oListChan.className = 'disHidden';
		onOff = true;
		//关闭div的时候清空oCharP.innerHTML所有的文字的样式
		var str = oInputSText.value;
		var str1 = oInputCText1.value;
		var newStr = oInputCText2.value;
		oCharP.innerHTML = oldStr.split(str).join('<span id="iSpan" class="">'+str+'</span>');
		oCharP.innerHTML = oldStr.split(str1).join('<span id="iSpan" class="">'+newStr+'</span>');
	}
	//当点击查找的按钮时
	oSearch.onclick = function(){
		oSearch.className = 'oChooseStyle';
		oChange.className = '';
		oInputS.style.display = 'block';
		oInputC.style.display = 'none';
	}
	//当点击替换按钮时
	oChange.onclick = function(){
		oSearch.className = '';
		oChange.className = 'oChooseStyle';
		oInputS.style.display = 'none';
		oInputC.style.display = 'block';
	}
	//当点击查找按钮时，P标签里对应相应的string
	oInputSBtn.onclick = function(){
		var str = oInputSText.value;
		if(!str) return;
		oCharP.innerHTML = oldStr.split(str).join('<span id="iSpan" class="oSpan">'+str+'</span>');
		str = '';
	}
	//当点击替换按钮时，P标签里对应相应的string
	oInputCbtn.onclick = function(){
		var str = oInputCText1.value;
		var newStr = oInputCText2.value;
		if(!str) return;
		oCharP.innerHTML = oldStr.split(str).join('<span id="iSpan" class="oSpan">'+newStr+'</span>');
		oldStr = oldStr.split(str).join(newStr);
	}
}
