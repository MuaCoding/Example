function getClass(oParent,sClass) {
	var result = [];
	var temp = oParent.getElementsByTagName('*');
	for(var i=0;i<temp.length;i++){
		if (temp[i].className == sClass) {
			result.push(temp[i]);
		};
	}
	return result;
}

window.onload = function(){
	var oDiv = document.getElementById('banner');
	var d = getClass(oDiv,'banner-box')[0].getElementsByTagName('ul')[0];
	var	b = oDiv.getElementsByTagName('ul')[0].getElementsByTagName('li'),
		prev = getClass(oDiv,'prev')[0],
		next = getClass(oDiv,'next')[0],
		dots = getClass(oDiv,'dots')[0],
		circle = dots.getElementsByTagName('i');
		a = 0,
		g = null,
		h = function(){
			++a >= b.length && (a = 0);
			e(a);
		}, 
		e = function(a){
			d.style.left = -860 * a +'px';
			dot(a)
		},
		dot = function(a){
			for(var i =0; i < b.length; i++){
				circle[i].className = ''
			}
			circle[a].className = "active";
		},
		auto = function (a) {
			a ? g = setInterval(function(){h()},4E3) : clearInterval(g)
		};
	(function(){
		for(var a = "", d = 0; d < b.length; d++){
			a += "<i " + (0 == d ? "class='active'" : "") + "></i>";
		}
		dots.innerHTML = a;
		for(var i = 0; i < circle.length; i++){
			circle[i].index = i;
			circle[i].onmouseover = function(){
				e(this.index);
			}
		}
	})();
	d.style.width = 860 * b.length + 'px';
	oDiv.onmouseover = function(){
		auto(!1)
	}
	oDiv.onmouseleave = function(){
		auto(!0)
	}
	setTimeout(function() {
		auto(!0)
	}, 4E3);
	prev.onclick = function(){
		0 > --a && (a = b.length -1);
		e(a);
	}
	next.onclick = function(){
		h();
	}

	
}


