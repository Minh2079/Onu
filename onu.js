const number = document.querySelector('.number')
const number1 = document.querySelector('.number1')
const number2 = document.querySelector('.number2')
const number3 = document.querySelector('.number3')

function counterUp(el, to) {
	let speed = 200
	let from = 0
	let step = to / speed
	const counter = setInterval(function () {
		from += step
		if (from > to) {
			clearInterval(counter)
			el.innerText = to
		} else {
			el.innerText = Math.ceil(from)
		}
	}, 1)
}

counterUp(number, 200)
counterUp(number1, 50)
counterUp(number2, 500)
counterUp(number3, 25)


jQuery(document).ready(function ($) {
    "use strict";
$(".menu-mobile").click(function(e){
	e.preventDefault();
  $(".menu").toggleClass("open");
});
});