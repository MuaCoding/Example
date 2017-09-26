 window.onload = function() {
            var str = "",
                data = [
                    [   {
                            title: "常用代码"
                        },
                        {
                            url: "javascript:;",
                            title: "验证用户是否输入"
                        }
                    ],
                    [   {
                            title: "常用的图片轮播相关"
                        },
                        {
                            url: "/views/banner/01/index.html",
                            title: "css3 选择轮播图"
                        },{
                            url: '/views/banner/02/index.html',
                            title: "产品展示轮播"
                        },{
                            url: '/views/banner/04/index.html',
                            title: "基础轮播"
                        }
                    ],
                    [
                        {
                            title: "时间日期效果"
                        },
                        {
                            url: "/views/date/01/index.html",
                            title: "全日历"
                        }
                    ],
                    [   {
                            title: "canvas效果"
                        },
                        {
                            url: "javascript:;",
                            title: "canvas实现小时钟"
                        }
                    ],
                    [{
                            title: "移动端"
                        },
                        {
                            url: "javascript:;",
                            title: "验证用户是否输入"
                        }
                    ],
                    [   {
                            title: "其他练习"
                        },
                        {
                            url: "/views/other/01/index.html",
                            title: "乘法口诀表"
                        },
                        {
                            url: '/views/other/02/index.html',
                            title: "星级评价"
                        },
                        {
                            url: '/views/other/04/index.html',
                            title: "vue起步"
                        }
                    ]
                ];

            for (var i = 0; i < data.length; i++) {
                var items = data[i];
                var sub = "";
                for (var j = 0; j < items.length; j++) {
                    var sons = items[j];
                    if (j == 0) {
                        sub += '<li><h1><a href="javascript:;">' + sons.title + '</a></h1><dl class="sub-dl">';
                    } else {
                        sub += '<dd><a href="'+sons.url+'" target="_blank">' + sons.title + '</a></dd>'
                    }
                    if (j == items.length - 1) {
                        sub += '</dl></li>'
                    }
                };
                str += sub;
            };
            var ol = document.getElementById("ol");
            ol.innerHTML = str;
            var h1 = document.getElementsByTagName("h1");
            var dl = document.getElementsByTagName("dl");
            var temp = -1;
            var flag = false;

            for (var i = 0; i < h1.length; i++) {
                h1[i].index = i;
                h1[i].onclick = function () {
                    // 点击第i个h1，排除已点击显示dl 
                    for (var j = 0; j < h1.length; j++) {
                        dl[j].style.display = "none";
                    }
                    if (temp == this.index && flag) {
                        dl[this.index].style.display = "none";
                        flag = false;
                    } else {
                        dl[this.index].style.display = "block";
                        flag = true
                    }
                    temp = this.index;
                }
            }
        }