$(document).ready(function() {
	const carousel = document.querySelector("#carouselBook");
	if (carousel != null) {
		carouselBook();
	}
});

function carouselBook() {
	const multipleItemCarousel = document.querySelector("#carouselBook");
	if (window.matchMedia("(min-width:576px)").matches) {
		const carousel = new bootstrap.Carousel(multipleItemCarousel, {
			interval: false
		});

		var carouselWidth = $(".carousel-inner-driver")[0].scrollWidth;
		var cardWidth = $(".carousel-item-driver").width();

		var scrollPosition = 0;

		$("#carousel-control-next-driver").on("click", function() {
			if (scrollPosition < carouselWidth - cardWidth * 4) {
				console.log("next ko tài");
				scrollPosition = scrollPosition + cardWidth;
				$(".carousel-inner-driver").animate({ scrollLeft: scrollPosition }, 600);
			}
		});
		$("#carousel-control-prev-driver").on("click", function() {
			if (scrollPosition > 0) {
				console.log("prev ko tài");
				scrollPosition = scrollPosition - cardWidth;
				$(".carousel-inner-driver").animate({ scrollLeft: scrollPosition }, 600);
			}
		});
	} else {
		$(multipleItemCarousel).addClass("slide");
	}
}