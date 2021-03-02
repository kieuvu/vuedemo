/* Jquery */
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 20) {
			$("#header").addClass("active");
		} else {
			$("#header").removeClass("active");
		}
	});

	$("#back_to_top").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 1000);
	});

	var homeTop = $("#home").offset().top;
	var serviceTop = $("#service").offset().top;

	$('.navBar ul li:nth-child(1) a').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: homeTop }, 1000)
	})

	$('.navBar ul li:nth-child(2) a').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: serviceTop - 140 }, 1000)
	})

});