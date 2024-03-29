"use strict";


// создадим элемент с прокруткой
let div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

// мы должны вставить элемент в документ, иначе размеры будут равны 0
document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;

div.remove();
document.documentElement.style.setProperty('--scroll-w', `${scrollWidth}px`);
// alert(scrollWidth);
const JSCCommon = { 
	modalCall() {
		// const link = '[data-fancybox="modal"], .link-modal-js';

		// Fancybox.bind(link, {
		// 	arrows: false,
		// 	// infobar: false,
		// 	touch: false,
		// 	trapFocus: false,
		// 	placeFocusBack: false,
		// 	infinite: false,
		// 	dragToClose: false,
		// 	type: 'inline',
		// 	autoFocus: false,
		// 	groupAll: false,
		// 	groupAttr: false,
		// 	// showClass: "fancybox-throwOutUp",
		// 	// hideClass: "fancybox-throwOutDown",
		// 	l10n: {
		// 		Escape: "Закрыть",
		// 		NEXT: "Вперед",
		// 		PREV: "Назад",
		// 	},
		// });
		// document.querySelectorAll(".modal-close-js").forEach(el=>{
		// 	el.addEventListener("click", ()=>{
		// 		Fancybox.close();
		// 	})
		// })
		// Fancybox.bind('[data-fancybox]', {
		// 	placeFocusBack: false,
		// });
		// const linkModal = document.querySelectorAll(link);
		function addData() {
			linkModal.forEach(element => {
				element.addEventListener('click', () => {
					let modal = document.querySelector(element.getAttribute("href"));
					const data = element.dataset;

					function setValue(val, elem) {
						if (elem && val) {
							const el = modal.querySelector(elem)
							el.tagName == "INPUT"
								? el.value = val
								: el.innerHTML = val;
							// console.log(modal.querySelector(elem).tagName)
						}
					}
					setValue(data.title, '.ttu');
					setValue(data.text, '.after-headline');
					setValue(data.btn, '.btn');
					setValue(data.order, '.order');
				})
			})
		}
		// if (linkModal) addData();
	},
	// /modalCall
	toggleMenu() {
		document.addEventListener("click", function (event) {
			const toggle = document.querySelectorAll(".toggle-menu-mobile--js");
			const menu = document.querySelector(".menu-mobile--js");
			const toggleEv = event.target.closest(".toggle-menu-mobile--js");
			if (!toggleEv) return;
			toggle.forEach(el => el.classList.toggle("on"));
			menu.classList.toggle("active");
			[document.body, document.querySelector('html')].forEach(el => el.classList.toggle("fixed"));
		}, { passive: true });
	},
	closeMenu() {
		const toggle = document.querySelectorAll(".toggle-menu-mobile--js");
		const menu = document.querySelector(".menu-mobile--js");
		if (!menu) return;
		if (menu.classList.contains("active")) {
			toggle.forEach(element => element.classList.remove("on"));
			menu.classList.remove("active");
			[document.body, document.querySelector('html')].forEach(el => el.classList.remove("fixed"));
		}

	},
	mobileMenu() { 
		const menu = document.querySelector(".menu-mobile--js");
		if (!menu) return;
		this.toggleMenu();
		document.addEventListener('mouseup', (event) => {
			let container = event.target.closest(".menu-mobile--js.active"); // (1)
			let link = event.target.closest(".menu-mobile .menu a"); // (1)
			let toggle = event.target.closest('.toggle-menu-mobile--js.on'); // (1)
			if (!container && !toggle) this.closeMenu();
		}, { passive: true });

		window.addEventListener('resize', () => {
			if (window.matchMedia("(min-width: 992px)").matches) this.closeMenu();
		}, { passive: true });
	},

	// tabs  .
	tabscostume(tab) {
		// const tabs = document.querySelectorAll(tab);
		// const indexOf = element => Array.from(element.parentNode.children).indexOf(element);
		// tabs.forEach(element => {
		// 	let tabs = element;
		// 	const tabsCaption = tabs.querySelector(".tabs__caption");
		// 	const tabsBtn = tabsCaption.querySelectorAll(".tabs__btn");
		// 	const tabsWrap = tabs.querySelector(".tabs__wrap");
		// 	const tabsContent = tabsWrap.querySelectorAll(".tabs__content");
		// 	const random = Math.trunc(Math.random() * 1000);
		// 	tabsBtn.forEach((el, index) => {
		// 		const data = `tab-content-${random}-${index}`;
		// 		el.dataset.tabBtn = data;
		// 		const content = tabsContent[index];
		// 		content.dataset.tabContent = data;
		// 		if (!content.dataset.tabContent == data) return;

		// 		const active = content.classList.contains('active') ? 'active' : '';
		// 		// console.log(el.innerHTML);
		// 		content.insertAdjacentHTML("beforebegin", `<div class="tabs__btn-accordion  btn btn-primary  mb-1 ${active}" data-tab-btn="${data}">${el.innerHTML}</div>`)
		// 	})


		// 	tabs.addEventListener('click', function (element) {
		// 		const btn = element.target.closest(`[data-tab-btn]:not(.active)`);
		// 		if (!btn) return;
		// 		const data = btn.dataset.tabBtn;
		// 		const tabsAllBtn = this.querySelectorAll(`[data-tab-btn`);
		// 		const content = this.querySelectorAll(`[data-tab-content]`);
		// 		tabsAllBtn.forEach(element => {
		// 			element.dataset.tabBtn == data
		// 				? element.classList.add('active')
		// 				: element.classList.remove('active')
		// 		});
		// 		content.forEach(element => {
		// 			element.dataset.tabContent == data
		// 				? (element.classList.add('active'), element.previousSibling.classList.add('active'))
		// 				: element.classList.remove('active')
		// 		});
		// 	})
		// })

		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});

	},
	// /tabs

	inputMask() {
		// mask for input
		let InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
		InputTel.forEach(element => element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}"));
		Inputmask({"mask":"+9(999)999-99-99", showMaskOnHover: false}).mask(InputTel);
	},
	// /inputMask
	ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
		if (isIE11) {
			document.body.insertAdjacentHTML("beforeend", '<div class="browsehappy">	<p class=" container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p></div>');
		}
	},
	sendForm() {
		var gets = (function () {
			var a = window.location.search;
			var b = new Object();
			var c;
			a = a.substring(1).split("&");
			for (var i = 0; i < a.length; i++) {
				c = a[i].split("=");
				b[c[0]] = c[1];
			}
			return b;
		})();
		// form
		$(document).on('submit', "form", function (e) {
			e.preventDefault();
			const th = $(this);
			var data = th.serialize();
			th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
			th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
			th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
			th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
			$.ajax({
				url: 'action.php',
				type: 'POST',
				data: data,
			}).done(function (data) {

				Fancybox.close();
				Fancybox.show([{ src: "#modal-thanks", type: "inline" }]);
				// window.location.replace("/thanks.html");
				setTimeout(function () {
					// Done Functions
					th.trigger("reset");
					// $.magnificPopup.close();
					// ym(53383120, 'reachGoal', 'zakaz');
					// yaCounter55828534.reachGoal('zakaz');
				}, 4000);
			}).fail(function () { });

		});
	},
	heightwindow() {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// We listen to the resize event
		window.addEventListener('resize', () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}, { passive: true });
	},
	animateScroll() {
		$(document).on('click', " .menu li a, .scroll-link", function () {
			const elementClick = $(this).attr("href");
			if (!document.querySelector(elementClick)) {
				$(this).attr("href", '/' + elementClick)
			}
			else {
				let destination = $(elementClick).offset().top;
				$('html, body').animate({ scrollTop: destination - 80 }, 0);
				return false;
			}
		});
	},
	getCurrentYear(el) {
		let now = new Date();
		let currentYear = document.querySelector(el);
		if (currentYear) currentYear.innerText = now.getFullYear();
	},
	toggleShow(toggle, drop) {

		let catalogDrop = drop;
		let catalogToggle = toggle;

		$(document).on('click', catalogToggle, function () {
			$(this).toggleClass('active').next().fadeToggle('fast', function () {
				$(this).toggleClass("active")
			});
		})

		document.addEventListener('mouseup', (event) => {
			let container = event.target.closest(catalogDrop + ".active"); // (1)
			let link = event.target.closest(catalogToggle); // (1)
			if (!container || !catalogToggle) {
				$(catalogDrop).removeClass('active').fadeOut();
				$(catalogToggle).removeClass('active');
			};
		}, { passive: true });
	},
	makeDDGroup() {
		let parents = document.querySelectorAll('.dd-group-js');
		for (let parent of parents) {
			if (parent) {
				// childHeads, kind of funny))
				let ChildHeads = parent.querySelectorAll('.dd-head-js:not(.disabled)');
				$(ChildHeads).click(function () {
					let clickedHead = this;

					$(ChildHeads).each(function () {
						if (this === clickedHead) {
							//parent element gain toggle class, style head change via parent
							$(this.parentElement).toggleClass('active');
							$(this.parentElement).find('.dd-content-js').slideToggle(function () {
								$(this).toggleClass('active');
							});
						}
						else {
							$(this.parentElement).removeClass('active');
							$(this.parentElement).find('.dd-content-js').slideUp(function () {
								$(this).removeClass('active');
							});
						}
					});

				});
			}
		}
	},
};
// const $ = jQuery;

function eventHandler() {
	// JSCCommon.ifie();
	JSCCommon.modalCall();
	// JSCCommon.tabscostume('tabs');
	JSCCommon.mobileMenu();
	// JSCCommon.inputMask();
	// JSCCommon.sendForm();
	// JSCCommon.heightwindow();
	JSCCommon.makeDDGroup();
	// JSCCommon.toggleShow(".catalog-block__toggle--desctop", '.catalog-block__dropdown');
	// JSCCommon.animateScroll();
	
	// JSCCommon.CustomInputFile(); 
	var x = window.location.host;
	let screenName;
	screenName = document.body.dataset.bg;
	if (screenName && x.includes("localhost:30")) {
		document.body.insertAdjacentHTML("beforeend", `<div class="pixel-perfect" style="background-image: url(screen/${screenName});"></div>`);
	}


	function setFixedNav() {
		let topNav = document.querySelector('.top-nav  ');
		if (!topNav) return;
		window.scrollY > 0
			? topNav.classList.add('fixed')
			: topNav.classList.remove('fixed');
	}

	function whenResize() {
		setFixedNav();
	}

	window.addEventListener('scroll', () => {
		setFixedNav();

	}, { passive: true })
	window.addEventListener('resize', () => {
		whenResize();
	}, { passive: true });

	whenResize();


	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		spaceBetween: 0,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: ' .swiper-pagination',
			type: 'bullets',
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	}

	const swiper4 = new Swiper('.sBanners__slider--js', {
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: 'auto',
		freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,

	});
	// modal window

	// let slideSpeed = 4500;
	let slideSpeed = 4500;
 
	// document.querySelector(':root').style.setProperty('--animate-speed', slideSpeed / 1000+ 's');

	function animateArrow(speed= slideSpeed) {
		document.querySelector(".border-svg").animate([
			// keyframes
			{ strokeDashoffset: 170},
			{ strokeDashoffset: 0}
		], {
			// timing options
			duration: speed
		})
		
		document.querySelector(".border-line__progress").animate([
			// keyframes
			{ transform: 'scaleX(0)'},
			{transform: 'scaleX(1)'}
		], {
			// timing options
			duration: slideSpeed
		})

	}
  const header2Swiper = new Swiper('.header2__slider--js', {
		slidesPerView: 1,
		effect: 'fade',
		loop: true,
		autoplay: {
			delay: slideSpeed,
			disableOnInteraction: false
		},
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.header2 .swiper-button-next',
      prevEl: '.header2  .swiper-button-prev',
    },
    pagination: {
			el: '.header2  .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		on:{
			init: () => animateArrow(),
			slideChange: () => animateArrow(slideSpeed + 500),
			
			// autoplay: () => animateArrow(slideSpeed + 500),


		}
	});
	$(".header2 .swiper-button-hand, .header2__slide").click(function() {
    // header2Swiper.autoplay.start()
		// animateArrow();
});


	// var datepicker, datepicker2, config;
	// config = {
	// 	locale: 'ru-ru',
	// 	uiLibrary: 'bootstrap4'
	// };
	// datepicker = $('#datepicker').datepicker(config);
	// datepicker2 = $('#datepicker2').datepicker(config);



	// var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

	// $(".date-picker-block-js").each(function () {

	// 	var th = $(this);

	// 	th.find('.startDate').datepicker({
	// 		locale: 'ru-ru',
	// 		uiLibrary: 'bootstrap4',
	// 		// iconsLibrary: 'fontawesome',
	// 		format: 'dd.mm.yyyy',
	// 		minDate: today,
	// 		maxDate: function () {
	// 			return th.find('.endDate').val();
	// 		}
	// 	});
	// 	th.find('.endDate').datepicker({
	// 		locale: 'ru-ru',
	// 		uiLibrary: 'bootstrap4',
	// 		// iconsLibrary: 'fontawesome',
	// 		format: 'dd.mm.yyyy',
	// 		minDate: function () {
	// 			return th.find('.startDate').val();
	// 		}
	// 	});
	// });
	


	$('.top_line2__city').on('click', function() {
		$('.top_line2__city-content').addClass('active');
	});
	$('.top_line2__cross').on('click', function() {
		$('.top_line2__city-content').removeClass('active');
	});
	$('.top_line2__btn-wrap a').on('click', function() {
		$('.top_line2__city-content').removeClass('active');
	});
	
	$('.popup-with-move-anim').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
	
	const  sSimilarProductsSlider = new Swiper(' .sSimilarProducts__slider--js', {
		slidesPerView: 4,
		spaceBetween: 30,
		// loop: true,
		rewind: true,
		pagination: {
			el: '.sSimilarProducts__pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
		},
	});


	const catalogItemSlider = new Swiper('.catalog-item-slider--js', {
		slidesPerView: 1,
    pagination: {
			el: '.catalog-item-slider .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		// observeParents: true,
	});

	$('.catalog-item-slider .swiper-pagination-bullet').hover(function() {
		$( this ).trigger( "click" );
	});

	
	var cardHeadSwiper = new Swiper(".card-head__newSlider--thumbs", {
		loop: true,
		spaceBetween: 15,
		slidesPerView: 4,
		breakpoints: {
			// when window width is >= 320px
			992: {
				spaceBetween: 5
			},
		}
		// freeMode: true,
		// watchSlidesProgress: true,
	});
	var cardHeadSwiper2 = new Swiper(".card-head__newSlider--js", {
		loop: true,
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: cardHeadSwiper,
		},
	});

	$('.filter-result__all').on('click', function() {
		// $('.tab-block--js').toggleClass('active');
	})
	$('.btn-tab-js').click(function (e) {
		if($('.tab-block--js').hasClass('on')) {
			$('.tab-block--js').removeClass('on').slideUp();
		} else {
			$('.tab-block--js').addClass('on');
		}
	})
	$('.btn-tab-js2').click(function (e) {
		$('.tab-block--js').removeClass('on').slideUp();

	})

	// $('.dop-block__btn-p').popover({
	// 	placement: 'auto',
	// 	trigger: 'hover',
	// })
	// cardHeadSwiper.controller.control = cardHeadSwiper2;
	// 		cardHeadSwiper2.controller.control = cardHeadSwiper;

};



if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }
