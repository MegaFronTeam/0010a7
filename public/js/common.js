// Для лэзи загрузки


document.addEventListener("DOMContentLoaded", function () {
	let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
	let active = false;

	const lazyLoad = function () {
		if (active === false) {
			active = true;

			setTimeout(function () {
				lazyImages.forEach(function (lazyImage) {
					if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
						lazyImage.src = lazyImage.dataset.src;
						// lazyImage.srcset = lazyImage.dataset.srcset;
						lazyImage.classList.remove("lazy");

						lazyImages = lazyImages.filter(function (image) {
							return image !== lazyImage;
						});

						if (lazyImages.length === 0) {
							document.removeEventListener("scroll", lazyLoad);
							window.removeEventListener("resize", lazyLoad);
							window.removeEventListener("orientationchange", lazyLoad);
							window.addEventListener("DOMContentLoaded", lazyLoad);
						}
					}
				});

				active = false;
			}, 200);
		}
	};

	document.addEventListener("scroll", lazyLoad);
	window.addEventListener("resize", lazyLoad);
	window.addEventListener("orientationchange", lazyLoad);
	window.addEventListener("DOMContentLoaded", lazyLoad);
});


// лэзи 
document.addEventListener("DOMContentLoaded", function () {
	let lazyImages = [].slice.call(document.querySelectorAll(".lazy-bg"));
	let active = false;

	const lazyLoad = function () {
		if (active === false) {
			active = true;

			setTimeout(function () {
				lazyImages.forEach(function (lazyImage) {
					if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
						lazyImage.parentElement.style.backgroundImage = 'url(' + lazyImage.dataset.src + ')';
						lazyImage.src = lazyImage.dataset.src;
						// lazyImage.srcset = lazyImage.dataset.srcset;
						lazyImage.classList.remove("lazy");

						lazyImages = lazyImages.filter(function (image) {
							return image !== lazyImage;
						});

						if (lazyImages.length === 0) {
							document.removeEventListener("scroll", lazyLoad);
							window.removeEventListener("resize", lazyLoad);
							window.removeEventListener("orientationchange", lazyLoad);
							window.addEventListener("DOMContentLoaded", lazyLoad);
						}
					}
				});

				active = false;
			}, 200);
		}
	};

	document.addEventListener("scroll", lazyLoad);
	window.addEventListener("resize", lazyLoad);
	window.addEventListener("orientationchange", lazyLoad);
	window.addEventListener("DOMContentLoaded", lazyLoad);
});



document.addEventListener("DOMContentLoaded", function () {
	var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));

	if ("IntersectionObserver" in window) {
		let lazyBackgroundObserver = new IntersectionObserver(function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					lazyBackgroundObserver.unobserve(entry.target);
				}
			});
		});

		lazyBackgrounds.forEach(function (lazyBackground) {
			lazyBackgroundObserver.observe(lazyBackground);
		});
	}
});
jQuery(document).ready(function ($) {

	// для свг
	// svg4everybody({});
	// Custom JS


	var url = document.location.href;
	$.each($(".s-po-body .s-catalog-tab-link "), function () {

		if (this.href == url) {
			if ($(this).hasClass("s-catalog-tab-link") == true) {

				$(this).addClass('active');
			}


		};

	});

	$('.popover-js').popover({
		placement: 'auto',
		trigger: 'hover',
	})
// console.log(11);


	var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

	$(".date-picker-block-js").each(function () {

		var th = $(this);

		th.find('.startDate').datepicker({
			locale: 'ru-ru',
			uiLibrary: 'bootstrap4',
			// iconsLibrary: 'fontawesome',
			format: 'dd.mm.yyyy',
			minDate: today,
			maxDate: function () {
				return th.find('.endDate').val();
			}
		});
		th.find('.endDate').datepicker({
			locale: 'ru-ru',
			uiLibrary: 'bootstrap4',
			// iconsLibrary: 'fontawesome',
			format: 'dd.mm.yyyy',
			minDate: function () {
				return th.find('.startDate').val();
			}
		});
	});
	$('.datepicker-date').datepicker({
		locale: 'ru-ru',
		uiLibrary: 'bootstrap4',
		format: 'dd.mm.yyyy',

	});

	$(".label-date-picker-js  input").click(function () {
		$(this).next().click();
	})

	// правил
	// accordion
	// $(".showhide").click(function () {
	// 	$(this).toggleClass("active").next("div").slideToggle().parent().toggleClass("active");
	// })

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
	});
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




	// слайдер на главной
	var swiper = new Swiper('.s-articals__slider', {
		loop: true,
		speed: 450,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		preloadImages: false,
		lazy: true,
		lazy: {
			loadPrevNext: true,
		}

	});

	// слайдер в карточке 
	var swiperCard = new Swiper('.carusel-slider', {
		// loop: true ,
		speed: 450,

		watchSlidesVisibility: true,
		lazy: {
			loadPrevNext: true,
		},
		slidesPerView: 'auto',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}
	});
	// слайдер в блоге

	var swiperblog = new Swiper('.blog-slider', {
		slidesPerView: 3,
		spaceBetween: 30,
		speed: 450,
		// slidesPerColumn: 3,
		// slidesPerView: 'auto',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		preloadImages: false,
		lazy: true,
		lazy: {
			loadPrevNext: true,
		},
		breakpoints: {
			992: {
				slidesPerView: 2,
			},

			768: {
				slidesPerView: 1,
			}
		}
	});

	// слайдеры со стр сдать авто
	var swiperR = new Swiper('.slider-one', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		speed: 450,
		slideToClickedSlide: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		lazy: true,
		lazy: {
			loadPrevNext: true,
		}
	});

	// слайдеры со стр сдать авто
	var swiperfr = new Swiper('.slider-carusel-js', {
		loop: true,
		slidesPerView: 1,
		speed: 450,
		slideToClickedSlide: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		lazy: true,
		lazy: {
			loadPrevNext: true,
		}
	});

	// слайдеры со стр about
	var swiperfr = new Swiper('.slider-carusel-ab-js', {
		loop: true,
		slidesPerView: 1,
		speed: 450,
		slideToClickedSlide: true,
		spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		lazy: true,
		lazy: {
			loadPrevNext: true,
		},
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 0,
			stretch: -30,
			depth: 100,
			modifier: 1,
			slideShadows: false,
		},
		grabCursor: true,
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


		// включение видео
		$(".form-wrap__prev-video").each(function () {
			$(this).on("click", function () {
				$(this).find(".pretty-embed__bg").removeClass("on")
				$('<iframe src="https://www.youtube.com/embed/' + $(this).find(".pretty-embed__bg").data("src") +
					'?autoplay=1" class="on" allow="encrypted-media" allowfullscreen="allowfullscreen"></iframe>').prependTo(this);
			})
		})


		if ($('div').is("#sDoneCabinet")) {

			function whenResize() {
				let cabinet = document.querySelector('#sDoneCabinet');
				if (cabinet) {

					const topH = $('#sDoneCabinet').offset().top;
					if ($(window).scrollTop() > topH) {
						$(" .btn-footer--js").addClass('show');
					} else {
						$(" .btn-footer--js").removeClass('show');
					}
				}

			}
			window.addEventListener('scroll', () => {
				whenResize();


			}, { passive: true });

			window.addEventListener('resize scroll', () => {
				whenResize();

			}, { passive: true });

			whenResize();
		}



	}});