$(function() {
	$('.toggle-menu').click(function (e) {
		e.preventDefault();
		$('.show-menu').toggleClass('close');
		$('.menu-container ul').toggleClass('active');
	});

		$('.flat-element').addClass('active');

	$('.owl-carousel').owlCarousel({
		loop:true, // После 4 слайдера опять идет 1. И так по кругу. Это режим true
		margin:30,
		nav:true, // по-умолчанию кнопки навигации включены (true)
		dots:false, // точки с индикацией текущего слайдера выключены (false)
		responsive:{
			0:{
				items:1, // при разрешении от 0 до 767 отображать 1 элемент в слайдере
				dots:true,
				nav:false
			},
			767:{
				items:2, // при разрешении от 767 до 1200 отображать 2 элемента в слайдере
				dots:true,
				nav:false
			},
			1200:{
				items:3 // при разрешении от 1200 до max отображать 3 элемента в слайдере
			}
		}
	});
	// left: 37, up: 38, right: 39, down: 40,
	// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
	var keys = {37: 1, 38: 1, 39: 1, 40: 1};

	function preventDefault(e) {
	  e = e || window.event;
	  if (e.preventDefault)
	      e.preventDefault();
	  e.returnValue = false;
	}

	function preventDefaultForScrollKeys(e) {
	    if (keys[e.keyCode]) {
	        preventDefault(e);
	        return false;
	    }
	}

	function disableScroll() {
	  window.addEventListener('DOMMouseScroll', preventDefault, false);
	  window.scroll = preventDefault;
	  window.onwheel = preventDefault;
	  window.onmousewheel = document.onmousewheel = preventDefault;
	  window.ontouchmove  = preventDefault;
	  document.onkeydown  = preventDefaultForScrollKeys;
	}

	function enableScroll() {
	    window.removeEventListener('DOMMouseScroll', preventDefault, false);
	    window.onmousewheel = document.onmousewheel = null;
	    window.onwheel = null;
	    window.ontouchmove = null;
	    document.onkeydown = null;
	}

	 var window_recall = //по нажатию на request-call и call-answer
	`<form id="window">
		<input type="text" class="window__input" name="name" id="name" placeholder="Ваше имя*" required>
		<input type="phone" class="window__input" name="phone" id="phone" placeholder="Ваш номер*" required>
		<textarea class="window__textarea" name="message" placeholder="Комментарий к заказу"></textarea>
		<button class="window__button" type="submit">Отправить</button>
	</form>`;

    var window_buy = //по нажатию на learning-more
		`<form id="window">
		<input type="text" class="window__input" name="name" id="name" placeholder="Ваше имя*" required>
		<input type="phone" class="window__input" name="phone" id="phone" placeholder="Ваш номер*" required>
		<input type="email" class="window__input" name="email" id="email" placeholder="Ваш Email*" required>
		<textarea class="window__textarea" name="message" placeholder="Комментарий к заказу"></textarea>
		<button class="window__button" type="submit">Отправить</button>
	</form>`;

    $(".request-call").click(function(){
        $("#popup-container").html(window_recall).fadeIn(disableScroll);
    });

    $(".call-answer").click(function(){
        $("#popup-container").html(window_recall).fadeIn(disableScroll);
    });

    $(".learning-more").click(function(){
        $("#popup-container").html(window_buy).fadeIn(disableScroll);
    });

    $('#popup-container').click(function(event) {
		if (event.target == this) {
			$(this).fadeOut(enableScroll);
    	};
	});
});
