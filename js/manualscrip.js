$(document).ready(function() {
	

	$("#trigger").click(function(){
		 if($("#nav").css('left') == '0px'){
		   $("#nav").stop().animate({left:'-1000px'},500);
		 } else {
			$("#nav").stop().animate({left:'0'},500);
		 };
		 $("html, body").animate({ scrollTop: 0 }, 200);
   			 return false;
	 });
	 
	 $("#menu .uno").click(function(){
		 if($(this).next('.menudos').css('left') == '0px'){
		   $(this).next('.menudos').stop().animate({left:'-1000px'},500);
		 } else {
			$(this).next('.menudos').stop().animate({left:'0'},500);
		 };
		 $("html, body").animate({ scrollTop: 0 }, 200);
   			 return false;
	 });
	 
	 $("#menu .dos").click(function(){
		 if($(this).next('.menutres').css('left') == '0px'){
		   $(this).next('.menutres').stop().animate({left:'-1000px'},500);
		 } else {
			$(this).next('.menutres').stop().animate({left:'0'},500);
		 };
		 $("html, body").animate({ scrollTop: 0 }, 200);
   			 return false;
	 });
	 
	 $(".atras").click(function(){
		 $(this).parent().parent().stop().animate({left:'-1000px'},500); 
	 });
	
	$("a").click(function(){
		 $("#nav").stop().animate({left:'-1000px'},500); 
		 $(".menudos").stop().animate({left:'-1000px'},500);
		 $(".menutres").stop().animate({left:'-1000px'},500);
	 });
});	
