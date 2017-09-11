document.write("<script src='js.js'></script>");
window.onload = function () {
    var big_r = document.getElementById("big-you");
    var big_rli = big_r.children;
    for (var i = 0; i < big_rli.length; i++) {
        var k = i + 1;
        if (k < 10) {
            k = "0" + k;
        }
        var colone = document.createElement("div");
        colone.innerHTML = '<img src="images/youxiao/youxiao_' + k + '.png" alt=""/>';
        colone.className = "big-img";
        big_rli[i].appendChild(colone)

    }

    var fashion = document.getElementById("fashion");
    var fashion_lis = fashion.getElementsByTagName("li");
    for (var i = 0; i < fashion_lis.length; i++) {
        var div = document.createElement("div")
        var k = i + 1;
        div.innerHTML =
            '<img src="images/fashion/' + k + '.jpg" alt=""/>'
        fashion_lis[i].children[0].appendChild(div)
    }

    var play = document.getElementById("play");
    var play_lis = play.getElementsByTagName("li");
    for (var i = 0; i < play_lis.length; i++) {
        var div = document.createElement("div")
        var k = i + 1;
        div.innerHTML =
            '<img src="images/play/' + k + '.jpg" alt=""/>'
        play_lis[i].children[0].appendChild(div)
    }

    var health = document.getElementById("health");
    var health_lis = health.getElementsByTagName("li");
    for (var i = 0; i < health_lis.length; i++) {
        var div = document.createElement("div")
        var k = i + 1;
        div.innerHTML =
            '<img src="images/health/' + k + '.jpg" alt=""/>'
        health_lis[i].children[0].appendChild(div)
    }

    var home = document.getElementById("home");
    var home_lis = home.getElementsByTagName("li");
    for (var i = 0; i < home_lis.length; i++) {
        var div = document.createElement("div")
        var k = i + 1;
        div.innerHTML =
            '<img src="images/home/' + k + '.jpg" alt=""/>'
        home_lis[i].children[0].appendChild(div)
    }

    var outdoors = document.getElementById("outdoors");
    var outdoors_lis = outdoors.getElementsByTagName("li");
    for (var i = 0; i < outdoors_lis.length; i++) {
        var div = document.createElement("div")
        var k = i + 1;
        div.innerHTML =
            '<img src="images/outdoors/' + k + '.jpg" alt=""/>'
        outdoors_lis[i].children[0].appendChild(div)
    }

    var baby = document.getElementById("baby");
    var baby_lis = baby.getElementsByTagName("li");
    for (var i = 0; i < baby_lis.length; i++) {
        var div = document.createElement("div")
        var k = i + 1;
        div.innerHTML =
            '<img src="images/baby/' + k + '.jpg" alt=""/>'
        baby_lis[i].children[0].appendChild(div)
    }
    var like = document.getElementById("like");
    var like_lis = like.getElementsByTagName("li");
    for (var i = 0; i < like_lis.length; i++) {
        var div = like_lis[i].children[0].children[0];
        var k = i + 1;
        div.innerHTML =
            '<img src="images/like/' + k + '.jpg" alt=""/>'
    }
    //轮播图
    //动态生成ol里面li  划过无缝滚动到对应的图片上  添加第6张图片
    var bancon = document.getElementById("bancon");
    var conbtn = document.getElementById("conbtn");
    var uls = bancon.children[0];
    var ullis = uls.children;
    var ols = conbtn.children[0];
    var olslis = ols.children;
    var clonecon = ullis[0].cloneNode(true);
    uls.appendChild(clonecon);
    var pic = 0
    var turn = 0
    for (var i = 0; i < olslis.length; i++) {
        olslis[i].index = i;
        olslis[i].onmouseover = function () {
            for (var k = 0; k < olslis.length; k++) {
                olslis[k].removeAttribute("class")
            }
            this.setAttribute("class", "sel")
            var target = -1130 * this.index;
            pic = this.index
            turn = this.index
            setanimate1(uls, target)
        }
    }
    var timer1 = null;

    function autoanimate1() {
        timer1 = setInterval(function () {
            pic++
            if (pic == 5) {
                pic = 0
            }
            for (var i = 0; i < olslis.length; i++) {
                olslis[i].className = ""
            }
            olslis[pic].className = "sel"
            if (turn === 5) {
                turn = 0
                target = 0
                uls.style.left = target + "px"
            }
            turn++
            var target = -1130 * turn;
            setanimate1(uls, target)
        }, 3000)
    }

    autoanimate1()
    bancon.onmouseover = function () {
        clearInterval(timer1)
    }
    ols.onmouseover = function () {
        clearInterval(timer1)
    }
    bancon.onmouseout = function () {
        clearInterval(timer1)
        autoanimate1()
    }
    ols.onmouseout = function () {
        clearInterval(timer1)
        autoanimate1()
    }


    function setanimate1(obj, target, fn) {
        clearInterval(obj.timer)
        obj.timer = setInterval(function () {
            //target = 1130*this.index
            //setp =10
            //leader =  obj.offsetleft    获取现在的位置
            var leader = obj.offsetLeft
            var setp = -50;
            setp = leader < target ? -setp : setp
            leader = leader + setp
            if (Math.abs(leader - target) > Math.abs(setp)) {
                obj.style.left = leader + "px"
            } else {
                obj.style.left = target + "px"
            }
            if (leader == target) {
                clearInterval(obj.timer)
                if (fn) {
                    fn()
                }
            }
        }, 15)
    }

//轮播图 end
//导航上小猫
    var main_bar = document.getElementById("main-nav-bar");
    var main_bar_lis = main_bar.children;
    for (var i = 0; i < main_bar_lis.length; i++) {
        var clolnne = document.createElement("span")
        clolnne.innerHTML = '<img src="images/top-bar.png" alt=""/>'
        main_bar_lis[i].appendChild(clolnne)
    }

    $(function () {
        $(".side-r s").hide()
        $(".side-r s").parents("div").mouseover(function (event) {
            $(this).children("s").stop().show(300)
           // event.stopPropagation();
        })
        $(".side-r s").parents("div").stop().mouseout(function (event) {
            $(".side-r s").hide()
        })

    })
    $(function () {
        $("#side-erweima span").hide()
        $("#side-erweima").mouseover(function (event) {
            $("#side-erweima span").show(100)
            event.stopPropagation();
        })
        $("#side-erweima").mouseout(function (event) {
            $("#side-erweima span").hide()
            event.stopPropagation();
        })
    })
    $(function () {
        $("#pannel>li").mouseover(function () {
            $(this).children("div").css("display", "block")
        })
        $("#pannel>li").mouseout(function () {
            $(this).children("div").css("display", "none")
        })
    })
    $(function () {
        $("#input").focus(function () {
            $(this).val("")
        })
        $("#input").blur(function () {
            $(this).val("进口零食好味道")
        })
    })
    $(function () {
        var timer1 = ""
        $("#side-to-top").click(function () {
            timer1 = setInterval(function () {
                var leader = window.scrollY
                var setp = -100;
                var tar = leader + setp;
                window.scrollTo(0, tar)
                if (window.scrollY == 0) {
                    clearInterval(timer1)
                }
            }, 15)

        })

        $(window).click(function () {
            var leader = window.scrollY;
            //        alert(leader);
        })
    })

    //到达800 显示
    $(function () {
        $(".side-l").hide(0)
        $(window).scroll(function() {
            var scroll =window.scrollY;
            if (scroll<800) {
                $(".side-l").fadeTo(100,0)
            } else {
                $(".side-l").fadeTo(100,1)
            }
        })
    })
    $(function () {
        $("#side-to-top").hide(0)
        $(window).scroll(function() {
            var scroll =window.scrollY
            if (scroll<800) {
                $("#side-to-top").hide(500)
            } else {
                $("#side-to-top").show(500)
            }
        })
    })

    $(function () {
        $(window).scroll(function() {
            var scroll = window.scrollY
            if (scroll>800) {
                //$(".topflash").animate({"height":"50px"},15)
                $(".topflash").slideDown()
                   // .hide(100);
            //    $(".topflash").css("top","0px");
            } else {
               // $(".topflash").show(100);
                //$(".topflash").animate({"height":"0"},15)
                $(".topflash").slideUp()
                 //   animate({"top":"-50px"},1000)
              //  $(".topflash").css("top","-50px");
            }
    })
    })

    $(function () {
        $(".flash-in").focus(function () {
            $(this).val("")
        })
        $(".flash-in").blur(function () {
            $(this).val("全球甄选好货")
        })
    })

    $(function() {
        var big_imgs =$(".big-img")
        for (var i=0;i<big_imgs.length ;i++){
            var clone = big_imgs[i]
            $(clone).parent().mouseover(function() {
                $(this).find("img").stop().slideUp(200)
            })
            $(clone).parent().mouseout(function() {
                $(this).find("img").stop().slideDown(200)
            })
        }

    })

    $(function() {
        $(".main-nav-r li a ").sparkleHover();
    })

    // $(function() {
   //     var big_clones =$(".big-colone")
   //     for (var i=0;i<big_clones.length ;i++){
   //         console.log(i);
   //         var clone = big_clones[i]
   //         $(clone).mouseover(function() {
   //             $(this).stop().slideUp(1000)
   //         })
   //         $(clone).mouseout(function() {
   //             //     $(this).stop().slideDown(1000)
   //         })
   //     }
//
   // })



    //第一个美丽人生
    $("#side-l-1").click(function () {
        $(this).siblings("div").removeClass();
        $(this).addClass("side-one");
        var timer2 = "";
        timer2 = setInterval(function () {
            var target = 1955;
            var leader = window.scrollY;
            var setp = 100;
            setp = leader > target ? -setp : setp;
            var tar = leader + setp;
            if (Math.abs(tar - target) >= Math.abs(setp)) {
                window.scrollTo(0, tar);
            } else {
                window.scrollTo(0, target);
            }
            if (window.scrollY == target) {
                clearInterval(timer2);
            }
        }, 15)
    });

    //第二个
    $("#side-l-2").click(function () {
        $(this).siblings("div").removeClass();
        $(this).addClass("side-two");
        var timer2 = "";
        timer2 = setInterval(function () {
            var target = 2469;
            var leader = window.scrollY;
            var setp = 100;
            setp = leader > target ? -setp : setp;
            var tar = leader + setp;
            if (Math.abs(target - tar) > Math.abs(setp)) {
                window.scrollTo(0, tar);
            } else {
                window.scrollTo(0, target);
            }
            if (window.scrollY == target) {
                clearInterval(timer2);
            }
        }, 15);
    });
    //第3个
    $("#side-l-3").click(function () {
        $(this).siblings("div").removeClass();
        $(this).addClass("side-thr");
        var timer2 = "";
        timer2 = setInterval(function () {
            var target = 3105;
            var leader = window.scrollY;
            var setp = 100;
            setp = leader > target ? -setp : setp;
            var tar = leader + setp;
            if (Math.abs(target - tar) > Math.abs(setp)) {
                window.scrollTo(0, tar);
            } else {
                window.scrollTo(0, target);
            }
            if (window.scrollY == target) {
                clearInterval(timer2);
            }
        }, 15);
    })
    //第4个
    $("#side-l-4").click(function () {
        $(this).siblings("div").removeClass();
        $(this).addClass("side-for");
        var timer2 = "";
        timer2 = setInterval(function () {
            var target = 3609;
            var leader = window.scrollY;
            var setp = 100;
            setp = leader > target ? -setp : setp;
            var tar = leader + setp;
            if (Math.abs(target - tar) > Math.abs(setp)) {
                window.scrollTo(0, tar);
            } else {
                window.scrollTo(0, target);
            }
            if (window.scrollY == target) {
                clearInterval(timer2);
            }
        }, 15);
    })
    //第5个
    $("#side-l-5").click(function () {
        $(this).siblings("div").removeClass();
        $(this).addClass("side-fiv");
        var timer2 = "";
        timer2 = setInterval(function () {
            var target = 4236;
            var leader = window.scrollY;
            var setp = 100;
            setp = leader > target ? -setp : setp;
            var tar = leader + setp;
            if (Math.abs(target - tar) > Math.abs(setp)) {
                window.scrollTo(0, tar);
            } else {
                window.scrollTo(0, target);
            }
            if (window.scrollY == target) {
                clearInterval(timer2);
            }
        }, 15);
    })
    //第6个
    $("#side-l-6").click(function () {
        $(this).siblings("div").removeClass();
        $(this).addClass("side-six");
        var timer2 = "";
        timer2 = setInterval(function () {
            var target = 4737;
            var leader = window.scrollY;
            var setp = 100;
            setp = leader > target ? -setp : setp;
            var tar = leader + setp;
            if (Math.abs(target - tar) > Math.abs(setp)) {
                window.scrollTo(0, tar);
            } else {
                window.scrollTo(0, target);
            }
            if (window.scrollY == target) {
                clearInterval(timer2);
            }
        }, 15);
    })
    //第7个
    $("#side-l-7").click(function () {
        $(this).siblings("div").removeClass();
        $(this).addClass("side-sev");
        var timer2 = "";
        timer2 = setInterval(function () {
            var target = 5364;
            var leader = window.scrollY;
            var setp = 100;
            setp = leader > target ? -setp : setp;
            var tar = leader + setp;
            if (Math.abs(target - tar) > Math.abs(setp)) {
                window.scrollTo(0, tar);
            } else {
                window.scrollTo(0, target);
            }
            if (window.scrollY == target) {
                clearInterval(timer2);
            }
        }, 15);
    })
    //第8个
    $("#side-l-8").click(function () {
        var timer2 = "";
        timer2 = setInterval(function () {
            var target = 0;
            var leader = window.scrollY;
            var setp = 200;
            setp = leader > target ? -setp : setp;
            var tar = leader + setp;
            if (Math.abs(target - tar) > Math.abs(setp)) {
                window.scrollTo(0, tar);
            } else {
                window.scrollTo(0, target);
            }
            if (window.scrollY == target) {
                clearInterval(timer2);
            }
        }, 15);
    })


};
//所有属性都到达目标值之后才能清理定时器
//封装 能够让 任意对象 的指定属性 变到指定值 的动画函数
function animate1(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            var leader = parseInt(getStyle(obj, k)) || 0;
            var target = json[k];
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style[k] = leader + "px";
            if (leader !== target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {//如果有才调用
                fn();//动画执行完成后执行
            }
        }
    }, 15);
}

function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}


/*function clickCrollto (class,Col,target) {
 $(".side-l div").css("backgroundColor", "#626262")
 $(class).css("backgroundColor", Col)
 var timer2 = ""
 timer2 = setInterval(function () {
 var target = 2005
 var leader = window.scrollY
 var setp = 100;
 setp = leader > target ? -setp : setp
 var tar = leader + setp;
 if (Math.abs(tar-target) >= Math.abs(setp)) {
 window.scrollTo(0, tar)
 } else {
 window.scrollTo(0, target)
 }
 if (window.scrollY == target) {
 clearInterval(timer2)
 }
 }, 15)
 }*/
