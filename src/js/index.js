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

	$('.m-modal').on($.modal.OPEN , function(event, modal) {
		$(this).addClass('slide-right');
		if ($('.js-select-modal-init').length){
			$('.js-select-modal-init').select2({
				theme: 'mirninskiy',
				dropdownParent: $('.blocker')
			});
		}
	});

	$('.m-modal').on($.modal.CLOSE , function(event, modal) {
		$(this).removeClass('slide-right');
		if ($('.js-select-modal-init').length){
			setTimeout(function(){
				$('.js-select-modal-init').select2('destroy');
			}, 400);
		}
	});


	// trigger modal
	$('.js-modal-trigger').trigger('click');


	// init select2
	if ($('.js-select-init').length){
		$('.js-select-init').select2({
			theme: 'mirninskiy'
		});
	}


	// show/hide menu
	$('.js-toggle-menu').click(function(){
		$(this).toggleClass('is-active');
		$('body').addClass('is-hidden-sm');
		$('.header__menu').toggleClass('is-show');
	});

	// hide menu mobile
	$('.js-header-menu-mobile-close').click(function(){
		$('.js-toggle-menu').removeClass('is-active');
		$('body').removeClass('is-hidden-sm');
		$('.header__menu').removeClass('is-show');
	});



	// show nav mobile
	$('.js-toggle-nav-mobile').click(function(){
		$(this).addClass('is-active');
		$('body').addClass('is-hidden');
		$('.header-nav__list').addClass('is-show');
	});

	// hide nav mobile
	$('.js-header-nav-mobile-close').click(function(){
		$('.js-toggle-nav-mobile').removeClass('is-active');
		$('body').removeClass('is-hidden');
		$('.header-nav__list').removeClass('is-show');
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


	// file modal
	$('.js-form-file input').on('change', function() { 
		var splittedFakePath = this.value.split('\\'); 
		$('.el-files__text').text(splittedFakePath[splittedFakePath.length - 1]); 
	});




	// slider init
	if ($('.js-preview-news-slider-init').length){
		$('.js-preview-news-slider-init').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: false,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				}
			]
		});
	}


	// main page slider init
	if ($('.js-slider-news-init').length){
		$('.js-slider-news-init').slick({
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			prevArrow: $('.js-slider-news-arrows-apend .slider-arrow--prev'),
			nextArrow: $('.js-slider-news-arrows-apend .slider-arrow--next'),
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						variableWidth: true
					}
				}
			]
		});
	}


	// article slider init
	if ($('.js-article-slider-init').length){
		var $slickElement = $('.js-article-slider-init');
		var $status = $slickElement.siblings('.js-article-pagination');

		$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
			var i = (currentSlide ? currentSlide : 0) + 1;
			$status.text(i + ' из ' + slick.slideCount);
		});

		$slickElement.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	}


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