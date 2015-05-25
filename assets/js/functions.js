// pre-load images
home_body_bg = new Image();
home_body_bg.src = "assets/images/home-body-bg.gif";
home_header_bg = new Image();
home_header_bg.src = "assets/images/home-header-bg.gif";
ul_li_a_hover_bg = new Image();
ul_li_a_hover_bg.src = "assets/images/home-expertise-li-a-hover-bg.gif";


// superfish menu 
$(function() { 
	$('#menu').superfish(); 
});


// home circles animation
$(function() {
	$('.circle').hover(
	function(){ $(this).animate({paddingTop: '-=5'}, 150); },
	function(){ $(this).animate({paddingTop: '+=5'}, 150); }
	);
});


// cycle homepage
$(function() { 
	$('#slide-container').cycle({
			prev: '#prev', 
			next: '#next',
			fx: 'scrollHorz',
			easing: 'easeInOutBack',
			speed: 1000,
			timeout: 10000
	});
});


// cycle contact
$(function() { 
	$('#contact-img-slider').cycle({
			fx: 'fade',
			speed: 1500,
			timeout: 1000
	});
});


// carousel meet the team
$(function() {
    $('.carousel').jCarouselLite({
        btnNext: '.carousel-next',
        btnPrev: '.carousel-prev',
		easing: 'easeOutBack',
		speed: 400,
		auto: 10000
    });
});


// form auto hide contents on hover
$(function() {
	$(function() {  
		$('input.join-email[type=text]').each(function() {
			var default_value = this.value;
			$(this).focus(function() {
				if (this.value == default_value) {
					this.value = '';
					$(this).closest('dd').addClass('completed');
				}
			});
			$(this).blur(function() {
				if (this.value == '') {
					this.value = default_value;
					$(this).closest('dd').removeClass('completed');
				}
			});
		});
	});
});


// product image caption fade in
$(window).load(
	function() {
	$('.product-detail-img-cap').delay(400).animate({'right': '+=220px'}, 'medium', 'easeOutBack');
});


// clear ff and safari cache
$(window).unload( function () {} ); 