// expertise circles hover 
$(function() {
	$('.expertise-box, .circle').hover(  
		function() {  
		$(this).addClass('hover');  
	},  
	function() {  
		$(this).removeClass('hover');  
		}  
	);
});

// categories animation
$(function() {
    $('#categories ul li a').hover(
    function(){ $(this).not('.current').find('img').animate({paddingLeft: '+=5'}, 100); },
    function(){ $(this).not('.current').find('img').animate({paddingLeft: '-=5'}, 100); }
    );
});


// community icons animation
$(function() {
	$('.community-icon a img').hover(
	function(){ $(this).animate({paddingTop: '-=5'}, 100); },
	function(){ $(this).animate({paddingTop: '+=5'}, 100); }
	);
});