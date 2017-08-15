window.onload = function(){
    var box = document.getElementById("inner");
    var h3 = box.getElementsByClassName("billboard-head-tab");
    var ul = box.getElementsByTagName("ul");
    var li = null;
    for (var i = 0; i < h3.length; i++) {
        hover(ul[i]);
        h3[i].index = i;
        h3[i].onmouseover = function () {
            for (var j = 0; j < h3.length; j++) {
                ul[j].style.display = "none";
                removeClass(h3[j], "check");
            }
            ul[this.index].style.display = "block";
            addClass(this, "check");
        }
    };
}


function hover(ul) {
    var li = ul.getElementsByTagName("li");
    
    for (var j = 0; j < li.length; j++) {
        li[j].onmouseover = function () {
            for (var s = 0; s < li.length; s++) {
                removeClass(li[s], 'hover');
            }
            addClass(this, "hover");
        }
    }
}

function hasClass(element, className) {
    if (!element) return;  
    var elementClassName = element.className;  
    if (elementClassName.length == 0) return false;  
    //用正则表达式判断多个class之间是否存在真正的class（前后空格的处理）  
    if (elementClassName == className || elementClassName.match(new RegExp("(^|\\s)" + className + "(\\s|$)")))  
      return true;  
    return false;
}

function addClass(obj, ele) {
    if (!hasClass(obj.ele)) {
        obj.className += ' ' + ele;
    }
};

function removeClass(obj, ele) {
    // 去除class；两边的空格
    var reg = new RegExp('(\\s+|^)' + ele + '(\\s+|$)');
    if (hasClass(obj, ele)) {
        obj.className = obj.className.replace(reg, '');
    }
}