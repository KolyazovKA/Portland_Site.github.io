


$(function(){
	var introH = $(".header").innerHeight()
		header = $("header"),
		scrolloffset = 0;
	if (scrolloffset >= 0){
		header.addClass("header--fixed");
	}
	else{
		header.removeClass("header--fixed");
	}
	$(window).on("scroll", function(){
		scrolloffset = $(this).scrollTop();
		if (scrolloffset >= 0){
			header.addClass("header--fixed");
		}
		else{
			header.removeClass("header--fixed");
		}
	});
	alert('Это бета версия сайта');

    $("[data-slider]").slick({
    	infinite: true, 
    	fade: false,
    	slidesToScroll: 1,
    	slidesToShow: 1
    });


});