/**
 * Created by mahc on 2016/4/14.
 */



(function ($) {
    $(window).load(function () {
        var con = $(".content-wrap");
        con.data("target", 0);

        $(".animite_1").data("animite_1", 0);
        $(".animite_2").data("animite_2", 0);
        $(".animite_3").data("animite_3", 0);
        $(".animite_4").data("animite_4", 0);
        $(".animite_5").data("animite_5", 0);
        $(".animite_6").data("animite_6", 0);
        $(".animite_7").data("animite_7", 0);
        $(".animite_9").data("animite_9", 0);
        $(".animite_10").data("animite_10", 0);
        $(".animite_11").data("animite_11", 0);
        $(".animite_12").data("animite_12", 0);
        $(".animite_13").data("animite_13", 0);
        $(".animite_14").data("animite_14", 0);
        $(".animite_15").data("animite_14", 0);
        $(".animite_16").data("animite_16", 0);
        $(".animite_17").data("animite_17", 0);
        $(".animite_18").data("animite_18", 0);
        $(".content-wrap").mCustomScrollbar({
            scrollButtons: {
                enable: true
            },
            mouseWheelPixels: 140,
            advanced:{ autoScrollOnFocus:false },
            callbacks: {
                onScrollStart: function () {
                    OnScrollStart();
                },
                onScroll: function () {
                    OnScroll();
                },
                onTotalScroll: function () {
                    OnTotalScroll();
                },
                onTotalScrollBack: function () {
                    OnTotalScrollBack();
                },
                // onTotalScrollOffset: 5,
                onTotalScrollBackOffset: 20,
                whileScrolling: function () {
                    WhileScrolling();
                }
            }
        });
        function OnScrollStart() {
        }

        function OnScroll() {

        }

        function OnTotalScroll() {
        }

        function OnTotalScrollBack() {
        }

        function WhileScrolling() {
            $('.screen1').css({'transform': 'translateY(' + Math.abs(mcs.top) * 0.5 + 'px)'});
            //右边栏定位

            //console.log(Math.abs(mcs.top));
            var _tar = {
                "sy": {"start": 0, "end": $(".screen3").offset().top + Math.abs(mcs.top)},
                "zyqz": {"start": $(".screen3").offset().top+ Math.abs(mcs.top), "end": $(".screen5").offset().top+ Math.abs(mcs.top)},
                "zzwm": {"start": $(".screen5").offset().top+ Math.abs(mcs.top), "end": $(".screen11").offset().top+ Math.abs(mcs.top)},
                "zzsx": {"start": $(".screen11").offset().top+ Math.abs(mcs.top), "end": $(".screen13").offset().top+ Math.abs(mcs.top)},
                "zjdk": {"start": $(".screen13").offset().top+ Math.abs(mcs.top), "end": $(".service").offset().top+ Math.abs(mcs.top)},
                "qxfw": {"start": $(".service").offset().top+ Math.abs(mcs.top), "end": $(".configure").offset().top+ Math.abs(mcs.top)},
                "zhcq": {"start": $(".configure").offset().top+ Math.abs(mcs.top), "end": $(".test-drive").offset().top+ Math.abs(mcs.top)},
                "ckjg": {"start": $(".test-drive").offset().top+ Math.abs(mcs.top), "end": $(".content").height()}
            };

            if ((Math.abs(mcs.top)+200) >= _tar.sy.start && (Math.abs(mcs.top)+200) < _tar.sy.end) {
                $("#side_menu li:eq(0) a").addClass("active");
                for (var i = 0; i < 8; i++) {
                    if (i != 0) {
                        $("#side_menu li:eq(" + i + ") a").removeClass();
                    }
                }
            }
            if ((Math.abs(mcs.top)+200)>= _tar.zyqz.start && (Math.abs(mcs.top)+200) < _tar.zyqz.end) {
                $("#side_menu li:eq(1) a").addClass("active");
                for (var i = 0; i < 8; i++) {
                    if (i != 1) {
                        $("#side_menu li:eq(" + i + ") a").removeClass();
                    }
                }
            }
            if ((Math.abs(mcs.top)+200) >= _tar.zzwm.start && (Math.abs(mcs.top)+200) < _tar.zzwm.end) {
                $("#side_menu li:eq(2) a").addClass("active");
                for (var i = 0; i < 8; i++) {
                    if (i != 2) {
                        $("#side_menu li:eq(" + i + ") a").removeClass();
                    }
                }
            }
            if ((Math.abs(mcs.top)+200) >= _tar.zzsx.start && (Math.abs(mcs.top)+200) < _tar.zzsx.end) {
                $("#side_menu li:eq(3) a").addClass("active");
                for (var i = 0; i < 8; i++) {
                    if (i != 3) {
                        $("#side_menu li:eq(" + i + ") a").removeClass();
                    }
                }
            }
            if ((Math.abs(mcs.top)+200) >= _tar.zjdk.start && (Math.abs(mcs.top)+200)< _tar.zjdk.end) {
                $("#side_menu li:eq(4) a").addClass("active");
                for (var i = 0; i < 8; i++) {
                    if (i != 4) {
                        $("#side_menu li:eq(" + i + ") a").removeClass();
                    }
                }
            }
            if ((Math.abs(mcs.top)+200) >= _tar.qxfw.start && (Math.abs(mcs.top)+200) < _tar.qxfw.end) {
                $("#side_menu li:eq(5) a").addClass("active");
                for (var i = 0; i < 8; i++) {
                    if (i != 5) {
                        $("#side_menu li:eq(" + i + ") a").removeClass();
                    }
                }
            }
            if ((Math.abs(mcs.top)+200) >= _tar.zhcq.start && (Math.abs(mcs.top)+200) < _tar.zhcq.end) {
                $("#side_menu li:eq(6) a").addClass("active");
                for (var i = 0; i < 8; i++) {
                    if (i != 6) {
                        $("#side_menu li:eq(" + i + ") a").removeClass();
                    }
                }
            }
            if ((Math.abs(mcs.top)+200) >= _tar.ckjg.start && (Math.abs(mcs.top)+200) < _tar.ckjg.end) {
                $("#side_menu li:eq(7) a").addClass("active");
                for (var i = 0; i < 8; i++) {
                    if (i != 7) {
                        $("#side_menu li:eq(" + i + ") a").removeClass();
                    }
                }
            }
            //个屏幕动画
            //
            if (startMove($(".animite_1"), con) && $(".animite_1").data("animite_1") == 0) {
                //初始化动画
                $(".animite_1").data("animite_1", 1);
                $(".animite_1").animate({"top": 0, "opacity": 1}, 1000);
            } else if (initMove($(".animite_1"), con)) {
                $(".animite_1").css({"top": "82%", "opacity": 0});
                $(".animite_1").data("animite_1", 0);
            }

            if (startMove($(".animite_2"), con) && $(".animite_2").data("animite_2") == 0) {
                //初始化动画
                $(".animite_2").data("animite_2", 1);
                $(".animite_2").animate({"top": 0, "opacity": 1}, 1000);
            } else if (initMove($(".animite_2"), con)) {
                $(".animite_2").css({"top": "72%", "opacity": 0});
                $(".animite_2").data("animite_2", 0);
            }

            if (startMove($(".animite_3"), con) && $(".animite_3").data("animite_3") == 0) {
                //初始化动画
                $(".animite_3").data("animite_3", 1);
                $(".animite_3").animate({"left": 0, "opacity": 1}, 1000);
            } else if (initMove($(".animite_3"), con)) {
                $(".animite_3").css({"left": "72%", "opacity": 0});
                $(".animite_3").data("animite_3", 0);
            }

            if (startMove($(".animite_4"), con) && $(".animite_4").data("animite_4") == 0) {
                //初始化动画
                $(".animite_4").data("animite_4", 1);
                $(".animite_4").animate({"top": 0, "opacity": 1}, 1000);
            } else if (initMove($(".animite_4"), con)) {
                $(".animite_4").css({"top": "35%", "opacity": 0});
                $(".animite_4").data("animite_4", 0);
            }

            if (startMove($(".screen4 .con3"), con) && $(".animite_5").data("animite_5") == 0) {
                //初始化动画
                $(".animite_5").data("animite_5", 1);
                $(".animite_5").animate({"top": 0, "opacity": 1}, 1000);
            } else if (initMove($(".screen4 .con3"), con)) {
                $(".animite_5").css({"top": "100%", "opacity": 0});
                $(".animite_5").data("animite_5", 0);
            }

            if (startMove($(".screen4 .con4"), con) && $(".animite_6").data("animite_6") == 0) {
                //初始化动画
                $(".animite_6").data("animite_6", 1);
                $(".animite_6").animate({"top": 0, "opacity": 1}, 1000);
            } else if (initMove($(".screen4 .con4"), con)) {
                $(".animite_6").css({"top": "71%", "opacity": 0});
                $(".animite_6").data("animite_6", 0);
            }

            if (startMove($(".screen4 .con5"), con) && $(".animite_7").data("animite_7") == 0) {
                //初始化动画
                $(".animite_7").data("animite_7", 1);
                $(".animite_7").animate({"left": 0, "opacity": 1}, 1000);
                $(".animite_8").animate({"left": 0, "opacity": 1}, 1000);
            } else if (initMove($(".screen4 .con5"), con)) {
                $(".animite_7").css({"left": "82%", "opacity": 0});
                $(".animite_8").css({"left": "-82%", "opacity": 0});
                $(".animite_7").data("animite_7", 0);
            }

            if (startMove($(".screen5"), con) && $(".animite_9").data("animite_9") == 0) {
                //初始化动画
                $(".animite_9").data("animite_9", 1);
                $(".animite_9").animate({"left": 0, "opacity": 1}, 1000);
            } else if (initMove($(".screen5"), con)) {
                $(".animite_9").css({"left": "-46%", "opacity": 0});
                $(".animite_9").data("animite_9", 0);
            }

            if (startMove($(".animite_10"), con) && $(".animite_10").data("animite_10") == 0) {
                //初始化动画
                $(".animite_10").data("animite_10", 1);
                $(".animite_10").animate({"left": 0, "opacity": 1}, 1000);
            } else if (initMove($(".animite_10"), con)) {
                $(".animite_10").css({"left": "-53%", "opacity": 0});
                $(".animite_10").data("animite_10", 0);
            }

            if (startMove($(".animite_11"), con) && $(".animite_11").data("animite_11") == 0) {
                //初始化动画
                $(".animite_11").data("animite_11", 1);
                $(".animite_11").animate({"top": 0, "opacity": 1}, 1000);
            } else if (initMove($(".animite_11"), con)) {
                $(".animite_11").css({"top": "8%", "opacity": 0});
                $(".animite_11").data("animite_11", 0);
            }
            if (startMove($(".screen7"), con) && $(".animite_12").data("animite_12") == 0) {
                //初始化动画
                $(".animite_12").data("animite_12", 1);
                $(".animite_12").animate({"top": 0, "opacity": 1}, 1000);
            } else if (initMove($(".animite_12"), con)) {
                $(".animite_12").css({"top": "45%", "opacity": 0});
                $(".animite_12").data("animite_12", 0);
            }

            if (startMove($(".animite_13"), con) && $(".animite_13").data("animite_13") == 0) {
                //初始化动画
                $(".animite_13").data("animite_13", 1);
                $(".animite_13").animate({"left": 0, "opacity": 1}, 1000);
            } else if (initMove($(".animite_13"), con)) {
                $(".animite_13").css({"left": "42%", "opacity": 0});
                $(".animite_13").data("animite_13", 0);
            }

            if (startMove($(".animite_14"), con) && $(".animite_14").data("animite_14") == 0) {
                //初始化动画
                $(".animite_14").data("animite_14", 1);
                $(".animite_14").animate({"opacity": 1}, 2000);
            } else if (initMove($(".animite_14"), con)) {
                $(".animite_14").css({"opacity": 0.2});
                $(".animite_14").data("animite_14", 0);
            }
            if (startMove($(".animite_15"), con) && $(".animite_15").data("animite_15") == 0) {
                //初始化动画
                $(".animite_15").data("animite_15", 1);
                $(".animite_15").animate({"left": 0, "opacity": 1}, 2000);
            } else if (initMove($(".animite_15"), con)) {
                $(".animite_15").css({"left": "73%", "opacity": 1});
                $(".animite_15").data("animite_15", 0);
            }

            if (startMove($(".animite_16"), con) && $(".animite_16").data("animite_16") == 0) {
                //初始化动画
                $(".animite_16").data("animite_16", 1);
                $(".animite_16").animate({"opacity": 1}, 2000);
            } else if (initMove($(".animite_16"), con)) {
                $(".animite_16").css({"opacity": 0.2});
                $(".animite_16").data("animite_16", 0);
            }

            if (startMove($(".screen13"), con) && $(".animite_17").data("animite_17") == 0) {
                //初始化动画
                $(".animite_17").data("animite_17", 1);
                $(".animite_17").animate({"left": 0, "opacity": 1}, 1000);
            } else if (initMove($(".screen13"), con)) {
                $(".animite_17").css({"left": "-38%", "top": 0});
                $(".animite_17").data("animite_17", 0);
            }


            if (startMove($(".service"), con) && $(".animite_18").data("animite_18") == 0) {
                //初始化动画
                $(".animite_18").data("animite_18", 1);
                $(".animite_18").animate({"left": 0, "opacity": 1}, 1000);
                $(".animite_19").animate({"left": 0, "opacity": 1}, 1000);
            } else if (initMove($(".service"), con)) {
                $(".animite_18").css({"left": "20%", "opacity": 0});
                $(".animite_19").css({"left": "-15%", "opacity": 0});
                $(".animite_18").data("animite_18", 0);
            }

        }

    });


    function startMove($_obj, $_con) {
        var t = false;
        if ($_obj.offset().top < $_con.height() * 0.8 && $_obj.offset().top >= 0) {
            t = true;
        } else {
            t = false;
        }
        return t;
    }

    function initMove($_obj, $_con) {
        var t = false;
        if ($_obj.offset().top > $_con.height() || $_obj.offset().top + $_obj.height() < 0) {
            t = true;
        } else {
            t = false;
        }
        return t;
    }

})(jQuery);


(function ($) {
    $(window).load(function () {
        $(".conf-wrap").mCustomScrollbar({
            scrollButtons: {
                enable: true
            },
            mouseWheelPixels: 250,
            callbacks: {
                onTotalScrollOffset: 40,
                onTotalScrollBackOffset: 20
            }
        });
    });
})(jQuery);




//轮播图
$(function () {
    //轮播图
    var t1 = new TouchSlider({id: 'hot_img_1', speed: 600, timeout: 4000});
    $("#hot_img_1").css({"height": "auto"});
    $('.left_1').click(function () {
        t1.pause();
        t1.prev();
    });
    $('.right_1').click(function () {
        t1.pause();
        t1.next();
    });

    var t2 = new TouchSlider({id: 'hot_img_2', speed: 600, timeout: 4000});
    $("#hot_img_2").css({"height": "auto"});
    $('.left_2').click(function () {
        t2.pause();
        t2.prev();
    });
    $('.right_2').click(function () {
        t2.pause();
        t2.next();
    });


    //拖拽
    var min = $(".screen12").width() * 0.20;
    var max = $(".screen12").width() * 0.75;
    var default_ = $(".screen12").width() * 0.486;
    drag($('#dragDiv1').get(0), $("#first_img"), $("#second_img"), min, max, default_);


    //拖拽
    //初始化
    $(".car_up").css("width", "50%");
    var allWid = $(".screen4").width();
    var min1 = allWid * 0.25;
    var max1 = allWid * 0.75;
    var default_1 = allWid * 0.486;
    drag1($(".screen4 .point").get(0), $(".car_up"), min1, max1, default_1);


    $('.contain_360').click(function () {
        $('.contain_360_white').show();
    })
    $('.car-360').click(function () {
        $('.contain_360_white').show();
    })


//配置表跳转
    $('.configure .sub-menu li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var _class = "." + $(this).attr("index_");
        $(".conf-wrap").mCustomScrollbar("scrollTo", _class);
    });

//右边栏跳转
    $('#side_menu li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var _class = "." + $(this).attr("_index");
        $(".content-wrap").mCustomScrollbar("scrollTo", _class);
    });
//左边栏跳转
    $('.setting-nav a:[_index]').click(function () {
        //$(this).addClass('active').siblings().removeClass('active');
        var _class = "." + $(this).attr("_index");
        $(".content-wrap").mCustomScrollbar("scrollTo", _class);
    });
});
