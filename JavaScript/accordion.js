$(function () {
    $(".version-detail:not(:first-of-type)").css("display", "none");
    $(".js-version-name:first-of-type").addClass("open");
    $(".js-version-name").click(function () {
        $(".open").not(this).removeClass("open").next().slideUp(300);
        $(this).toggleClass("open").next().slideToggle(300);
    });
});