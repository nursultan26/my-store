$(window).scroll(function() {
	 
	var scroll = $(this).scrollTop()
	if (scroll > 10) {
		$('.navbar').css({
			'background-color': '#62c6e4',
			'box-shadow': '0 1px 8px #555',

		});
		$('.nav-link').css({
			'color': '#'
		});
	}else {
		$('.navbar').css({
			'box-shadow': 'none',
			'background-color': '#00000000'
		});
		$('.nav-link').css({
			'text-shadow': '0px 0px 16px black'
		});		
	}
	$(".header_back").css({
		"transform": "translate(0%, " + scroll/20 + "%"
	})
});

