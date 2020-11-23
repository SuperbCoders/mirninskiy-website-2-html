import "./import/modules";

$(document).ready(function() {
	// modal
	$('.js-modal-init').click(function(event){
		event.preventDefault();
		$(this).modal({
			fadeDuration: 400
		});
	});


	// modal is right
	$('.js-modal-announcement').click(function(event) {
		event.preventDefault();
		$(this).modal({
			fadeDuration: 400,
			blockerClass: 'is-right'
		});
	});


	// show/hide menu
	$('.js-toggle-menu').click(function(){
		$(this).toggleClass('is-active');
		$('.header__menu').toggleClass('is-show');
	});


	// show/hide search
	$('.js-toggle-search').click(function(){
		$('body').addClass('is-hidden');
		$('.header__search').addClass('is-show');
	});

	$('.js-search-close').click(function(){
		setTimeout(function() {
			$('body').removeClass('is-hidden');
		}, 400);
		$('.header__search').removeClass('is-show');
	});


	// slider init
	$('.js-slider-news-init').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: $('.js-slider-news-arrows-apend .slider-arrow--prev'),
		nextArrow: $('.js-slider-news-arrows-apend .slider-arrow--next')
	});


	// show/hide password
	$('.js-login-switch-password').click(function() {
		$(this).toggleClass('is-active');
		var input = $($(this).next('input'));
		if (input.attr('type') == 'password') {
			input.attr('type', 'text');
		} else {
			input.attr('type', 'password');
		}
	});
});