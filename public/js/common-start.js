const $ = jQuery;

function eventHandler() {

	// для свг
	// svg4everybody({});
	// Custom JS


	// правил
	// accordion
	$(".showhide").click(function () {
		$(this).toggleClass("active").next("div").slideToggle().parent().toggleClass("active");
	})

	// галерея
	$(".gal").each(function () {

		$(this).find("a").magnificPopup({
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
				verticalFit: true,

			},
			gallery: {
				enabled: true
			}
		});
	})
	// мобильное меню
	var toggMnu = $(".toggle-mnu-1").click(function () {

		$(".toggle-mnu-1").toggleClass("on");
		// $("body").toggleClass("fixed");
		$(".hidden-mnu").slideToggle();
		$("html, body").toggleClass("fixed");
		return false;
	});


	// листалка по стр
	$(" .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - 20;

		$('html, body').animate({
			scrollTop: destination
		}, 1100);

		return false;
	});
	$(" .scroll-link-top").click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1100);

		return false;
	});



	// аккордион в ЛК

	$(".toggle-td-js").click(function () {
		$(this).toggleClass("active").parent("tr").find(".hidden-td-js .td-inner").slideToggle(250).toggleClass("active");
	})


	function heightses() {

		var w = $(window).width();
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		//

		$(".btn-more-js").click(function () {
			var tr = $(this).parents(".s-po-body__section").find("tr:hidden");
			if (w > 992) {
				tr.fadeIn();


			} else if (w < 991.98) {
				tr.css("display", "block");
			}
		})



		// скрывает/показывает td  в аккордионе
		$(".hidden-td-js .td-inner").each(function () {
			if (w > 992) {
				$(".toggle-td-js").removeClass("active");
				$(this).removeClass("active").removeAttr("style")

			} else if (w < 991.98 && !$(this).hasClass("active")) {

				$(this).hide();
			}
		})
		if (w > 992) {
			$(".s-po-body__section tr").removeAttr("style");
		}


		var topH = $("header ").height() + $('.top-nav  ').height();
		var topH2 = $(".header-block ").height();
		$(window).scroll(function () {
			if ($(this).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed-ready');
			} else {
				$('.top-nav  ').removeClass('fixed-ready');
			}
		});

		if ($(this).scrollTop() > topH2) {
			$('.top-nav  ').addClass('fixed');

		} else {
			$('.top-nav  ').removeClass('fixed');

		}
		$(window).scroll(function () {
			if ($(this).scrollTop() > topH2) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});

		// конец добавил
	}

	window.addEventListener('resize', () => {
		heightses();
	}, { passive: true });


	heightses();



	// модальное окно
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in',
		callbacks: {

			close: function () {
				$(".form-wrap__prev-video iframe").remove();
			}
			// e.t.c.
		}
	});
	$(".data-modal").click(function () {
		var mod = $(this).attr("href");
		$(mod).find(".form-wrap__title").text($(this).data("title"));
		var text = $(this).data("text")
		if (text) {
			$(mod).find(".h6.mb-4").text(text);

		}
	})


	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});



	// маска на инпут
	let InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
	InputTel.forEach(function (element) {
		element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}")
	});
	Inputmask("+7(999)999-99-99").mask(InputTel);


	$(document).on('click', '[data-tab-block="all-filters"]', function () {

		$(".input-range").each(function () {
			let minV = $(this).data("min"),
				maxV = $(this).data("max");

			$(this).ionRangeSlider({
				type: "double",
				min: minV,
				max: maxV,
			});

		})
		$(".input-range-single").each(function () {
			let minV = $(this).data("min"),
				maxV = $(this).data("max");

			$(this).ionRangeSlider({
				type: "single",
				min: minV,
				max: maxV,
			});

		})
	})

	$(".s-calc__range-js").each(function () {
		let minV = $(this).data("min"),
			maxV = $(this).data("max");

		$(this).ionRangeSlider({
			grid: true,
			force_edges: true,
			from: 2,
			prettify_enabled: true,
			values: [
				"0 ₽", "500 тыс.&nbsp;₽",
				"1 млн.&nbsp;₽", "5 млн.&nbsp;₽", "10 млн.&nbsp;₽"
			]
		});

	})


	//  маске в модалке регистрации звонка


	let InputTel2 = [].slice.call(document.querySelectorAll(".form-wrap__tel-block input[type='tel']"));
	InputTel2.forEach(function (element) {
		element.setAttribute("pattern", "[0-9]{2}-[0-9]{2}")
	});
	Inputmask("99-99").mask(InputTel2);

	$(".form-wrap__select--reg-call")
		.change(function () {
			var str = "";
			str = $(this).val();
			console.log(str)
			if (str == '') {
				$(".tabs-blocks__item").fadeOut();

			}
			$(str).fadeIn().siblings().hide();


		})
	//  .trigger("change");

	$(function () {
		var tab = ('tabs-modal');


		$('.' + tab + '__btns--sm').on('click', '.' + tab + '__col:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});
	});


	$('.btn-tab-js').click(function (e) {
		e.preventDefault();
		var th = $(this),
			tabRadio = th.data('tab-block');
		// console.log(tabRadio);
		//  th.hide();
		$('#' + tabRadio).slideDown().addClass("active")
			.siblings('.tab-block').removeClass('active').slideUp();

	})




	// добавил
	function heightses2() {

		var w = $(window).width();
		var topH = $(".header ").height();

		$(window).scroll(function () {
			if ($(this).scrollTop() > topH) {
				$('.s-catalog-filter  ').addClass('fixed');
			} else {
				$('.s-catalog-filter  ').removeClass('fixed');
			}
		});
		// конец добавил
	}

	window.addEventListener('resize', () => {
		heightses2();
	}, { passive: true });

	heightses2();

	// маска на инпут

	let InputTime = [].slice.call(document.querySelectorAll(".input-time"));
	InputTime.forEach(function (element) {
		element.setAttribute("pattern", "([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?")
	});
	Inputmask("99-99").mask(InputTime);

	// кастомный инпут файл

	var file = $(".add-file input[type=file]");
	file.each(function () {

		$(this).change(function () {
			var filename = $(this).val().replace(/.*\\/, "");
			var name = $(this).parents('.add-file').find(".add-file__filename  ");
			name.text(filename);

		});
	})

	// табы в блоке s-add-car
	$('.photo-block__input').change(function () {
		$('.form-wrap__tabs').not('.active').addClass('active').siblings().removeClass('active');
	})

	$(".btn-modal-close").click(() => { $.magnificPopup.close() });

	// анимация кнопок
	$(".btn-js").each(function () {
		var B = $(this);
		var A, C, z, D;
		setInterval(function () {
			if (B.find(".animate-js").length === 0) {
				B.prepend("<span class='animate-js'></span>");
			}
			A = B.find(".animate-js");
			A.removeClass("btn_animate");
			if (!A.height() && !A.width()) {
				C = Math.max(B.outerWidth(), B.outerHeight());
				A.css({
					height: C,
					width: C
				});
			}
			z = Math.round(Math.random() * A.width() - A.width() / 2);
			D = Math.round(Math.random() * A.height() - A.height() / 2);
			A.css({
				top: D + "px",
				left: z + "px"
			}).addClass("btn_animate");
		}, 3000);
	});





};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

window.onload = function () {
	document.body.classList.add('loaded_hiding');
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
	}, 50);
}