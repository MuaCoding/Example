window.onload = function(){
    var oImgBox = document.querySelector(".imgBox");
    var aImg = oImgBox.querySelectorAll("img");
    var oBtnBox = document.querySelector(".btnBox");
    var aSpan = oBtnBox.querySelectorAll("span");
    var iIndex = 0;
    var aClass = ["hide", "show"];

    function tab(a) {
        aImg[iIndex].className = 'hide';
        0 == a ? iIndex-- : iIndex++;
        switch (iIndex) {
            case -1:
                iIndex = aImg.length - 1;
                break;
            case aImg.length:
                iIndex = 0;
                break;
        }
        aImg[iIndex].className = 'show';
    };

    for (var i = 0; i < aSpan.length; i++) {
        (function (a) {
            aSpan[a].onclick = function () {
                tab(a);
            }
        })(i);
    }
}