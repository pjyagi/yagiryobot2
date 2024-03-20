$(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.fadein').each(function () {
            const targetPos = $(this).offset().top;
            if (scrollAmount > targetPos - wHeight + 180) {
                $(this).addClass("fadeInDown");
            }
        });
    });
});