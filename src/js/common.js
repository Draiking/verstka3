$(function() {

    //menu
    $(".sf-menu").superfish({
        cssArrows: false,
        hoverClass: 'no-class',
		delay: 200
     });
    //slid
    var owl =$(".slider");
    owl.owlCarousel({
        items: 1,
        itemElement: "slide-wrap",
        nav: true,
        navText: "",
        loop : true
    });
        $(".next").click(function () {
            owl.trigger('next.owl.carousel');
        })
        $(".prev").click(function () {
            owl.trigger('prev.owl.carousel')
        })
    // mob menu

    $("#my-menu").mmenu({
        navbar: {
            extensions: ['widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black'],
            title: "Меню"
        }
    });
    $(".mobile-mnu").click(function () {
        var mmAPI = $("#my-menu").data("mmenu");
        mmAPI.open();
        var thiss = $(this).find(".toggle-mnu");
        thiss.toggleClass("on");
        $(".main-mnu").slideToggle();
        return false;
    });



	//SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	// $("form").submit(function() { //Change
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php", //Change
	// 		data: th.serialize()
	// 	}).done(function() {
	// 		alert("Thank you!");
	// 		setTimeout(function() {
	// 			// Done Functions
	// 			th.trigger("reset");
	// 		}, 1000);
	// 	});
	// 	return false;
	// });
    //
	// //Chrome Smooth Scroll
	// try {
	// 	$.browserSelector();
	// 	if($("html").hasClass("chrome")) {
	// 		$.smoothScroll();
	// 	}
	// } catch(err) {
    //
	// };
    //
	// $("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
