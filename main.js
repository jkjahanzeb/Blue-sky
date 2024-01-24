$('.hero-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    navText: ["<img src='wp-content/themes/bssc/assets/images/prev-arrow.png'>", "<img src='wp-content/themes/bssc/assets/images/next-arrow.png'>"],
    autoplay: true,
	lazyLoad: true,
    smartSpeed: 1000,
	autoplayHoverPause: true
})

$(window).bind("load resize", function() {
    // Get Height
    var maxHeight = 0;
    $(".s-1-1").each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    $(".s-1-1").height(maxHeight);
});
$('.menu_btn').click(function () {
    $('.site-navigation').toggleClass('show-nav')
})
$('<span class="toggleSub"><span class="plus">+</span></span>').insertBefore('.sub-menu')
$(".toggleSub").click(function () {
    $(".menu-item-has-children .sub-menu").slideUp();
    $('.plus', this).html('+');
    if (!$(this).next().is(":visible")) {
        $(this).next().slideDown();
        $('.plus').html('+');
        $('.plus', this).html('–');
    }
})