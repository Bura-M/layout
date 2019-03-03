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

	 var window_recall = //html
	`<form id="window">
		<input type="text" class="window__input" name="name" id="name" placeholder="Ваше имя*" required>
		<input type="phone" class="window__input" name="phone" id="phone" placeholder="Ваш номер*" required>
		<textarea class="window__textarea" name="message" placeholder="Комментарий к заказу"></textarea>
		<button class="window__button" type="submit">Отправить</button>
	</form>`;

    var window_buy = //html
	`<form id="window">
		<input type="text" class="window__input" name="name" id="name" placeholder="Ваше имя*" required>
		<input type="phone" class="window__input" name="phone" id="phone" placeholder="Ваш номер*" required>
		<input type="email" class="window__input" name="email" id="email" placeholder="Ваш Email*" required>
		<textarea class="window__textarea" name="message" placeholder="Комментарий к заказу"></textarea>
		<button class="window__button" type="submit">Отправить</button>
	</form>`;

    $(".request-call").click(function(){
        $("#popup-container").html(window_recall).fadeIn();
    });

    $(".call-answer").click(function(){
        $("#popup-container").html(window_recall).fadeIn();
    });

    $(".learning-more").click(function(){
        $("#popup-container").html(window_buy).fadeIn();
    });

    $('#popup-container').click(function(event) {
		if (event.target == this) {
			$(this).fadeOut();
    	};
	});
});
