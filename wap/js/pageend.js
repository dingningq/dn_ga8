// JavaScript Document
cssadd(document.body,pageis);
tmgifurl="images/tm.gif",playerurl="player.swf";
function pageend(){
	if (!document.getElementsByTagName) return;
	var navnote;
	var anchors=document.getElementsByTagName("*");
	for (var anchor_i=0; anchor_i<anchors.length; anchor_i++) {
		if (pageis=="IE IE6" && anchors[anchor_i].nodeName=="IMG") {
			if (anchors[anchor_i].src.toUpperCase().substring(anchors[anchor_i].src.toUpperCase().length-3,anchors[anchor_i].src.toUpperCase().length) == "PNG") {
				if (anchors[anchor_i].complete) {
					pngtm(anchors[anchor_i]);
				} else {
					addf(anchors[anchor_i],"onload","pngtm(this)");
				}
			}
		}
		var aclass=anchors[anchor_i].className.split(" ");
		for (var j_i=0; j_i<aclass.length;j_i++) {
			switch (aclass[j_i]) {
				case "pagelist":likelist_main(anchors[anchor_i],6,'li','.turnpage','hash');break;
				case "spagelist":slikelist_main(anchors[anchor_i],2,'ul','.turnpage','hash');break;
				case "timelist":
					likelist_main(anchors[anchor_i],20,'li','.turnpage','hash');
					morecss(anchors[anchor_i],'li','bg',2);
				break;
				case "photolist":photo_auto_main(anchors[anchor_i],180,135,'center');break;
				case "nostyle":nostyle(anchors[anchor_i]);break;
				case "floating_window2":floating_window_main(anchors[anchor_i],0,220,'x');break;
				case "sd_column":slidingdoor_main(anchors[anchor_i],'onclick','.sd_content','.sd_title','.sd_btn','tohash',1);break;
				case "outspread_column":outspread_main(anchors[anchor_i],'close_other','open_no','.outspread_content','.outspread_title','hash');break;
				case "sbar":scrollbar_main(anchors[anchor_i]);break;
				case "scroll_list":scroll_main(anchors[anchor_i],"right",".scroll_content","ul",3,0);break;
				case "scrollcontent_list":scrollcontent_main(anchors[anchor_i],3,"ul",10,3000);break;
				case "videolist":
					morecss(anchors[anchor_i],'li','list',6);
					mshow_main(anchors[anchor_i],1,'li','.txt_container_out');
					photocontent_main(anchors[anchor_i],0,"ul",760,509,"nohash",".imgtxt");
				break;
				case "listforphoto":
					photolist(anchors[anchor_i],'.more',"ul");
				break;
				case "photo_list":
					photocontent_main(anchors[anchor_i],0,"ul",760,509,"nohash",".txt");
				break;
				case "photo_list1":
					photocontent_main(anchors[anchor_i],1,"ul",400,300,"hash",".txt");
				break;
				case "photo_list2":
					photocontent_main(anchors[anchor_i],2,"ul",400,300,"nohash",".txt");
				break;
				case "photo_list3":
					photocontent_main(anchors[anchor_i],3,"ul",300,300,"nohash",".txt");
				break;
				
				case "photo_list4":
					photocontent_main(anchors[anchor_i],4,"ul",400,300,"nohash",".txt");
				break;
				case "column_morecss_left":morecss(anchors[anchor_i],'tr','tr',2);break;
				case "tr1":
				case "tr2":
					morecss(anchors[anchor_i],'td||th','td',2);
					firstcss(anchors[anchor_i],'td||th','first',1);
				break;
				case "config":config_main(anchors[anchor_i],1,1);break;
				case "mshow1":mshow_main(anchors[anchor_i],1,'.mshow1_container','.mshow1_content');break;
				case "mshow2":mshow_main(anchors[anchor_i],1,'.mshow2_container','ul',1);break;
				case "mshow3":mshow_main(anchors[anchor_i],-1,'dl','.txt_container');break;
				
				case "menu":
					mshow_main(anchors[anchor_i],0,'li','.menu_sub');
					befornav(anchors[anchor_i],'menu',0,1);
				break;
				case "submenu":
					mshow_main(anchors[anchor_i],0,'li','.menu_thr');
					befornav(anchors[anchor_i],'submenu',1);
				break;
				case "nav":navnote=anchors[anchor_i];break;
				case "hotimg1":hotimg_main(anchors[anchor_i],'li',0,4000);break;
				case "hotimg2":hotimg_main(anchors[anchor_i],'li',18,4000,'img');break;
				case "hotimg3":hotimg_main(anchors[anchor_i],'li',18,[2000,6000,2000],'txt');break;
				case "hotimg4":hotimg_main(anchors[anchor_i],'li',18,4000,'note','.btn_container');break;
				case "hotimg5":hotimg_main(anchors[anchor_i],'p',18,2000);break;
			}
		}
	}
	if (typeof(navnote)=="object") pagenav(navnote);
}
pageend();