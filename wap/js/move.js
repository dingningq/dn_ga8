/**
 *@author huangjing
 *广汽传祺 move
 */

$(document).ready(function () {
    page_init();
    //页面加载
    function page_init() {
        
        $(".light_btn_open").on("click", lac.ligth1_op);
        $(".light_btn_close").on("click", lac.ligth1_cl);
        $(".light2_btn_open").on("click", lac.ligth2_op);
        $(".light2_btn_close").on("click", lac.ligth2_cl);
        lac.scrollevent();
        setTimeout(function () {
           $(".contain .title").transition({ opacity: 1, x: 0 }, 600);
        }, 500);
		setTimeout(function () {
           $(".tryform").transition({ opacity: 1 }, 1000);
        }, 500);
        //track_event();
    }

});

var lac = LacrosseModel();
function LacrosseModel() {
    var l = {};
	l.scrollevent = function () {
        var pvcheck = [0, 0, 0, 0];
        $(window).on("scroll", function (e) {
            var wy = window.pageYOffset,
                hy = $(window).height() - 100,
                title = $(".kv_title"),
                airnum = $("div.aitNum"),
                airbox = $("div#airbox"),
                txt = $("img.layout_txt"),
                layout = $(".layout");
            title.each(function (i, item) {
                if (Math.abs(($(item).offset().top - wy)) < hy) $(item).transition({ opacity: 1, x: 0 }, 600);
            });
//
//            if (Math.abs((airnum.offset().top - wy)) < hy) airnum.addClass("airNumAni");
//            if (Math.abs((airbox.offset().top - wy)) < hy) {
//                airbox.addClass("airAni");
//                setTimeout(function () {
//                    $("#airbox").removeClass("airAni").addClass("airPopAni");
//                }, 300);
//            }
            txt.each(function (idx, item) {
                if (Math.abs(($(item).offset().top - wy)) < hy) {
                    $(item).transition({ x: 0, opacity: 1 }, 600);
                }
            });
            layout.each(function (idx, item) {
                if (Math.abs(($(item).offset().top - wy)) < hy) {
                    $(item).transition({ scale: 1, opacity: 1 }, 800);
                }
            });

        });
    }
    return l;
    //l.scrollevent = function () {
//        var pvcheck = [0, 0, 0, 0];
//        $(window).on("scroll", function (e) {
//            var wy = window.pageYOffset,
//                hy = $(window).height() - 100,
//                title = $(".kv_title"),
//                airnum = $("div.aitNum"),
//                airbox = $("div#airbox"),
//                txt = $("img.layout_txt"),
//                layout = $(".layout");
//            layout.each(function (idx, item) {
//                if (Math.abs(($(item).offset().top - wy)) < hy) {
//                    $(item).transition({ scale: 1, opacity: 1 }, 1000);
//                }
//            });
//
//        });
//    }
//    return l;
}
