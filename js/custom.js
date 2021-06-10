$(window).on("load", function () {

	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({
		triggerElement: ".main-section",
		offset: 0,
		triggerHook: 0,
		duration: "600%",
		reverse: true
	}).setPin(".scene").setClassToggle(".main-section", "enter").addTo(controller);

	$(".scene img").each(function () {
		var imgAnimation = new TimelineMax();

		var content1 = $(".scene-1");
		var content2 = $(".scene-2");
		var content3 = $(".scene-3");
		var content4 = $(".scene-4");
		var content5 = $(".scene-5");
		var content6 = $(".scene-6");
		var content7 = $(".scene-7");
		var content8 = $(".scene-8");
		var content9 = $(".scene-9");
		var content10 = $(".scene-10");
		var content11 = $(".scene-11");
		var content12 = $(".scene-12");

		imgAnimation
			.fromTo(content1, 0.3, { opacity: 1, }, { opacity: 1, })
			.fromTo(content2, 0.3, { opacity: 0, }, { opacity: 1, })
			.fromTo(content3, 0.3, { opacity: 0, }, { opacity: 1, })
			.fromTo(content4, 0.3, { opacity: 0, }, { opacity: 1, })
			.fromTo(content5, 0.3, { opacity: 0, }, { opacity: 1, })
			.fromTo(content6, 0.3, { opacity: 0, }, { opacity: 1, })
			.fromTo(content7, 0.3, { opacity: 0, }, { opacity: 1, })
			.fromTo(content8, 0.3, { opacity: 0, }, { opacity: 1, })
			.fromTo(content9, 0.3, { opacity: 0, }, { opacity: 1, })
			.fromTo(content10, 0.3, { opacity: 0, }, { opacity: 1, })
			.fromTo(content11, 0.3, { opacity: 0, }, { opacity: 1, })
			.fromTo(content12, 0.3, { opacity: 0, }, { opacity: 1, })

		var problemtrigger = new ScrollMagic.Scene({
			triggerElement: ".scene",
			triggerHook: 0.5,
			offset: 0,
			reverse: true,
			duration: "1000%"
		})
			// .addIndicators({ name: "Lighting" })
			.setTween(imgAnimation)
			.addTo(controller)

	});

	//Prevent Page Reload on all # links
	$("a[href='#']").click(function (e) {
		e.preventDefault();
	});

	//placeholder
	$("[placeholder]").each(function () {
		$(this).attr("data-placeholder", this.placeholder);

		$(this).bind("focus", function () {
			this.placeholder = '';
		});
		$(this).bind("blur", function () {
			this.placeholder = $(this).attr("data-placeholder");
		});
	});

	// Add remove class when window resize finished
	var $resizeTimer;
	$(window).on("resize", function (e) {
		if (!$("body").hasClass("window-resizing"))
			$("body").addClass("window-resizing");
		clearTimeout($resizeTimer);
		$resizeTimer = setTimeout(function () {
			$("body").removeClass("window-resizing");
		}, 250);
	});

	// Add Class on Window Load
	$("body").removeAttr("style").addClass("page-loaded");

});



$(window).on("scroll", function () {


});

