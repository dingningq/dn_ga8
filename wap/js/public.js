$(document).ready(function(){
    $('.nav-btn').click(function(){
		if($('.nav-btn').hasClass('close')){
           $('.nav-btn').removeClass('close')
           $('.right-nav-info').animate({left:'100%'},"slow");	
		   setTimeout(function () {
        $('.right-nav').hide();
    },600);
		}else{
		   $('.nav-btn').addClass('close')
           $('.right-nav').css('display','block');
           $('.right-nav-info').animate({left:'50%'},"slow");
		}
    });
	//$('.img-btn').click(function(){
//	     $('.test-drive form').slideToggle('slow');
//	});
	$('.right-nav').click(function(){
	   $('.nav-btn').removeClass('close')
           $('.right-nav-info').animate({left:'100%'},"fast");	
		   setTimeout(function () {
        $('.right-nav').hide();
    },100);
	});
	//智臻完美工艺
var t1=new TouchSlider({id:'hot_img',speed:600,timeout:10000});
    $("#hot_img").css({"height":"auto"});
	$('.left').click(function(){
		t1.pause();
	    t1.prev();
	});
	$('.right').click(function(){
		t1.pause();
	    t1.next();
	});
var t2=new TouchSlider({id:'hot_img2',speed:600,timeout:10000});
    $("#hot_img2").css({"height":"auto"});
  $('.left2').click(function(){
    t2.pause();
      t2.prev();
  });
  $('.right2').click(function(){
    t2.pause();
      t2.next();
  });
//智尊私享空间
  var active=0;
for(var i=0;i<$("#hot_img_si li").length;i++){
		$("#hot_img_btn").append("<a>"+(i+1)+"</a>");
}
$("#hot_img_btn a").eq(0).addClass("current");
$("#hot_img_btn a").click(function(){
	tsi.slide($(this).index());
});
var tsi=new TouchSlider({id:'hot_img_si',speed:600,timeout:10000,before:function(index){$("#hot_img_btn a").eq(active).removeClass('current');active=index;$("#hot_img_btn a").eq(active).addClass('current');}});
    $("#hot_img_si").css({"height":"auto"});
//
var activetwo=0;
for(var i=0;i<$("#hot_img3 li").length;i++){
	$("#hot_img_btn3").append("<a>"+(i+1)+"</a>");
};
$("#hot_img_btn3 a").eq(0).addClass("current");
$("#hot_img_btn3 a").click(function(){
	t3.slide($(this).index());
});
var t3=new TouchSlider({id:'hot_img3',speed:600,timeout:10000,before:function(index){$("#hot_img_btn3 a").eq(activetwo).removeClass('current');activetwo=index;$("#hot_img_btn3 a").eq(activetwo).addClass('current');}});
    $("#hot_img3").css({"height":"auto"});
var t4=new TouchSlider({id:'hot_img4',speed:600,timeout:10000});
    $("#hot_img4").css({"height":"auto"});
  $('.left2').click(function(){
      t4.pause();
      t4.prev();
  });
  $('.right2').click(function(){
      t4.pause();
      t4.next();
  })
//智极动控体系
var t5=new TouchSlider({id:'hot_img5',speed:600,timeout:10000});
    $("#hot_img5").css({"height":"auto"});
	$('.left5').click(function(){
		t5.pause();
	    t5.prev();
	});
	$('.right5').click(function(){
		t5.pause();
	    t5.next();
	});
var t6=new TouchSlider({id:'hot_img6',speed:600,timeout:10000});
    $("#hot_img6").css({"height":"auto"});
  $('.left6').click(function(){
    t6.pause();
    t6.prev();
  });
  $('.right6').click(function(){
    t6.pause();
    t6.next();
  })	
})