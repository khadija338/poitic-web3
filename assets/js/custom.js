(function ($) {
	"use strict";
    $('.counter').counterUp({
		delay: 10,
		time: 1000
	});
// var swiper = new Swiper(".home1-banner-slider", {
//     slidesPerView: 1,
//     speed: 1500,
//     spaceBetween: 25,
//     slidesPerView: 1,
//     centerSlides: true,
//     loop: true,
//     effect: 'fade',
//     autoplay: {
//         delay: 3000, // Autoplay duration in milliseconds
//         disableOnInteraction: false,
//     },
//     navigation: {
//         nextEl: ".next-1",
//         prevEl: ".prev-1",
//     },
//     pagination: {
//         el: ".paginations111",
//         clickable: true,
//     },
// });

var swiper = new Swiper(".home1-banner-slider", {
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 2500, // Autoplay duration in milliseconds
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".next-1",
		prevEl: ".prev-1",
	},

	breakpoints: {
		280: {
			slidesPerView: 1,
		},
		386: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 1,
			spaceBetween: 15,
		},
		768: {
			slidesPerView: 1,
			spaceBetween: 15,
		},
		992: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 1,
			spaceBetween: 15,
		},
		1400: {
			slidesPerView: 1,
		},
	}

});

var swiper = new Swiper(".banner-slider2", {
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 2500, // Autoplay duration in milliseconds
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".next-2",
		prevEl: ".prev-2",
	},

	breakpoints: {
		280: {
			slidesPerView: 1,
		},
		386: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 15,
		},
		1400: {
			slidesPerView: 3,
		},
	}

});
var swiper = new Swiper(".discover-slider", {
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 2500, // Autoplay duration in milliseconds
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".next-1",
		prevEl: ".prev-1",
	},

	breakpoints: {
		280: {
			slidesPerView: 1,
		},
		386: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 15,
		},
		1400: {
			slidesPerView: 3,
		},
	}

});

new WOW().init();

document.addEventListener("DOMContentLoaded", function(event) {
		
	let offset = 50;
	let circleContainer = document.querySelector(".circle-container");
	let circlePath = document.querySelector('.circle-container path');
	let pathLength = circlePath.getTotalLength();
	circlePath.style.transition = circlePath.style.WebkitTransition = 'none';
	circlePath.style.strokeDasharray = pathLength;
	circlePath.style.strokeDashoffset = pathLength;
	circlePath.getBoundingClientRect();
	circlePath.style.transition = circlePath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

	let updateLoader = () => {

		let scrollTop = window.scrollY;
		let docHeight = document.body.offsetHeight;
		let winHeight = window.innerHeight;
		let height = docHeight - winHeight;
		let progress = pathLength - (scrollTop * pathLength / height);
		circlePath.style.strokeDashoffset = progress;

		if (scrollTop > offset) {
		circleContainer.classList.add("active");
		} else {
		circleContainer.classList.remove("active");
		}
			
	}
	circleContainer.onclick = function(){
	window.scrollTo({ top: 0, behavior: 'smooth'});
	}

	window.onscroll = () => {
	updateLoader();
	}
	updateLoader();
	});

}(jQuery));