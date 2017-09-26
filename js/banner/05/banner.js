window.onload = function(){
	(function(id,t){
		if (!document.getElementById(id)){return false};
		var doc = document,
		auto='',
		oId = doc.getElementById(id),
		IE = /msie (\d+\.\d)/i.test(navigator.userAgent),
		numm = 0,
		bot = turn,
		setOpacity = function(obj,opacity){
			if (IE) {
				obj.style.filter = 'Alpha(opacity=' + (opacity * 100) + ')';
			}else{
				obj.style.opacity = opacity;
			};
		}，
		setBottom = function(obj,bottom){
			obj.style.bottom = bottom + 'px'
		},
		fideIn = function(obj,timeLimit) {
			if (obj.style.display === 'none') {
				obj.style.display = 'block';
			};
			setOpacity(obj,0);
			obj.style.zIndex = 1;
			if (timeLimit) {
				timeLimit = 200;
			};
			var opacity = 0,
			step = timeLimit / 20;
			clearTimeout(fideInTime);
			var fideInTime = setTimeout(function(){
				bot = false;
				if (opacity >= 1) {
					bot = turn;
					return;
				};
				opacity += 1/step;
				setOpacity(obj,opacity);
				fideInTime = setTimeout(arguments.callee,20)
			},20)
		}
	})('turn',3)
}