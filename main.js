(function () {
	
	var slide = 1;
	var $prev = $('.prev');
	var $next = $('.next');
	var $cube = $('#cube');

	$prev.hide();

	var swiper = $('.swiper-container').swiper({
		mode:'horizontal',
		speed: 1000,
		centeredSlides: true
	});

	var move = function (number) {
		var el			= $('#cube').find('figure')[number-1];
		var place		= $(el).attr('class');

		$cube.removeClass();
		$cube.addClass('show-'+ place +'');

		swiper.swipeTo(number-1);
	};

	var walk = function (e) {
		var way = e.data.way;
		
		if (way === 'next') {			
			slide++;
			move(slide);			
		} else if (way === 'prev') {
			slide = slide - 1;
			move(slide);
		}

		if (slide === 3) {
			$next.fadeOut();
		} else {
			$next.fadeIn();
		}

		if (slide === 1) {
			$prev.fadeOut();		
		} else {
			$prev.fadeIn();		
		}

		console.log(way);		
		console.log(slide);		
	};

	$next.on('click', {way: 'next'}, walk);
	$prev.on('click', {way: 'prev'}, walk);
	
})();