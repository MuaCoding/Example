function getClass(oParent,sClass){
	var aTmp = oParent.getElementsByTagName('*');
	var aResult = [];
	var i = 0;
	for(i=0;i<aTmp.length;i++){
		if(aTmp[i].className == sClass){
			aResult.push(aTmp[i]);
		}
	}
	return aResult;

}

window.onload = function(){
	var oDiv = document.getElementById('automation');

	var oPrev = getClass(oDiv,'prevDiv')[0];
	var oNext = getClass(oDiv,'nextDiv')[0];

	var oPrevBtn = getClass(oDiv,'prev')[0];
	var oNextBtn = getClass(oDiv,'next')[0];

	var oPrevArrow = getClass(oPrevBtn,'ico')[0];
	var oPrevArrowLight = getClass(oPrevBtn,'ico1')[0];
	var oPrevTxt = getClass(oPrevBtn,'txt')[0];

	var oNextArrow = getClass(oNextBtn,'ico')[0];
	var oNextArrowLight = getClass(oNextBtn,'ico1')[0];
	var oNextTxt = getClass(oNextBtn,'txt')[0];

	oPrevArrow.alpha = 100;
	var iInitPrevArrow = oPrevArrow.left = oPrevArrow.offsetLeft;
	oPrevArrowLight.alpha =0;
	var iInitPrevArrowLight = oPrevArrowLight.left = oPrevArrowLight.offsetLeft;
	oPrevTxt.alpha = 0;
	var iInitPrevTxt = oPrevTxt.left = oPrevTxt.offsetLeft;

	oNextArrow.alpha = 100;
	var iInitNextArrow = oNextArrow.left = oNextArrow.offsetLeft;
	oNextArrowLight.alpha =0;
	var iInitNextArrowLight = oNextArrowLight.left = oNextArrowLight.offsetLeft;
	oNextTxt.alpha = 0;
	var iInitNextTxt = oNextTxt.left = oNextTxt.offsetLeft;

	var aLi = oDiv.getElementsByTagName('ul')[0].getElementsByTagName('li');

	var aLiInit = [];

	var oLine = getClass(oDiv,'line')[0];

	var iInterval = 150;

	var i = 0;

	for(i= 0;i<aLi.length;i++){
		aLiInit[i] = {};
		aLi[i].width = aLiInit[i].w = aLi[i].getElementsByTagName('img')[0].offsetWidth;
		aLi[i].height = aLiInit[i].h = aLi[i].getElementsByTagName('img')[0].offsetHeight;
		aLi[i].left = aLiInit[i].l = aLi[i].offsetLeft;
		aLi[i].top = aLiInit[i].t = aLi[i].offsetTop;
		aLi[i].alpha = aLiInit[i].alpha = 0;
		aLi[i].z = aLiInit[i].z = 1;
		
	};

	for(i= 0;i<aLi.length;i++){
		aLi[i].style.position = 'absolute';
		aLi[i].style.left = aLiInit[i].l + 'px';
		aLi[i].style.top = aLiInit[i].t + 'px';
	}

	aLi[1].alpha = aLiInit[1].alpha = 60;
	aLi[2].alpha = aLiInit[2].alpha = 80;
	aLi[3].alpha = aLiInit[3].alpha = 100;
	aLi[4].alpha = aLiInit[4].alpha = 80;
	aLi[5].alpha = aLiInit[5].alpha = 60;

	aLi[1].z = aLiInit[1].z = 2;
	aLi[2].z = aLiInit[2].z = 3;
	aLi[3].z = aLiInit[3].z = 4;
	aLi[4].z = aLiInit[4].z = 3;
	aLi[5].z = aLiInit[5].z = 2;

	oPrev.onmouseover = function(){
		startMove(oPrevArrow,{left: iInitPrevArrow+10},iInterval);
		startMove(oPrevArrowLight,{left: iInitPrevArrowLight +10,alpha: 100},iInterval);
		startMove(oPrevTxt,{left: iInitPrevTxt-10,alpha: 100},iInterval);
	};

	oPrev.onmouseout = function(){
		startMove(oPrevArrow, {left: iInitPrevArrow}, iInterval);
		startMove(oPrevArrowLight, {left: iInitPrevArrowLight, alpha:0}, iInterval);
		startMove(oPrevTxt, {left: iInitPrevTxt, alpha:0}, iInterval);
	}

	oPrev.onmousedown = function(){
		gotoImg(true);
	}
	oNext.onmouseover = function(){
		startMove(oNextArrow,{left: iInitNextArrow-10},iInterval);
		startMove(oNextArrowLight,{left: iInitNextArrowLight -10, alpha: 100},iInterval);
		startMove(oNextTxt,{left: iInitNextTxt + 10, alpha:100},iInterval);
	};

	oNext.onmouseout = function(){
		startMove(oNextArrow,{left: iInitNextArrow},iInterval);
		startMove(oNextArrowLight,{left: iInitNextArrowLight, alpha: 0},iInterval);
		startMove(oNextTxt,{left: iInitNextTxt, alpha:0},iInterval);
	};

	oNext.onmousedown = function(){
		gotoImg(false);
	};
	function gotoImg(bLeft){
		if (bLeft) {
			aLiInit.push(aLiInit.shift());
			
		}else{
			aLiInit.unshift(aLiInit.pop());
		};

		oLine.style.display = 'none';

		for(i =0;i<aLi.length;i++){
			startMove(aLi[i],{left: aLiInit[i].l, top:aLiInit[i].t, width: aLiInit[i].w, height: aLiInit[i].h, alpha: aLiInit[i].alpha, zIndex:aLiInit[i].z},300,function(){oLine.style.display='block';});

		}
	}

}


function startMove(obj,oParams, iTime, fnCallBackEnd){
	var iInterval = 45;
	var iEndTime = (new Date()).getTime() + iTime;
	var iTimes = Math.ceil(iTime/iInterval);
	var oSpeed = {};

	if(typeof obj.timer == 'undefined'){
		obj.timer = null;
	}

	for(key in oParams){
		oSpeed[key] = (oParams[key] - obj[key])/iTimes;
	}
	if (obj.timer) {
		clearInterval(obj.timer);
	};
	// ????????
	obj.timer = setInterval(
		function(){
			doMove(obj,oParams,oSpeed,iEndTime,fnCallBackEnd)
		},iInterval
	);

}

function doMove(obj,oTarget,oSpeed,iEndTime,fnCallBackEnd){
	var iNow = (new Date()).getTime();
	if(iNow >=iEndTime){
		clearInterval(obj.timer);
		obj.timer = null;
		for (key in oTarget) {
			obj[key] = oTarget[key];
			switch(key){
				case 'alpha':
					obj.style.opacity = oTarget[key]/100;
					obj.style.filter = "alpha(opactity:" + oTarget[key] + ")";
					break;
				case 'zIndex':
					obj.style.zIndex = oTarget[key];
					break;
				case 'width':
				case 'height':
					obj.getElementsByTagName('img')[0].style[key]=oTarget[key]+'px';
					break;
				default: 
					obj.style[key]= oTarget[key]+'px';
					break;
			}
		};
		if (fnCallBackEnd) {
			fnCallBackEnd();
		};
	}
	else{
		for(key in oTarget){
			obj[key]+=oSpeed[key];
			switch(key){
				case 'alpha':
					obj.style.opacity = obj[key]/100;
					obj.style.filter = "alpha(opactity:" + obj[key] + ")";
					break;
				case 'zIndex':
					obj.style.zIndex = oTarget[key];
					break;
				case 'width':
				case 'height':
					obj.getElementsByTagName('img')[0].style[key] = obj[key]+'px';
					break;
				default: 
					obj.style[key] = obj[key]+'px';
					break;
			}
		}
	}
}