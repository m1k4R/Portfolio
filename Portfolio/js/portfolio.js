$(document).ready(function () {

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var objectSelect = $("#home");
    var objectPosition = objectSelect.offset().top;
    /* console.log('a'); */
    if (scroll > objectPosition) {
        $("#header").addClass("nav-changed");
        $("#logo").addClass("logo-color-changed");
    } else {
        $("#header").removeClass("nav-changed");
        $("#logo").removeClass("logo-color-changed");

    }
});

$("#navbarButton").click(function() {
    $("#header").addClass("nav-changed");
    $("#logo").addClass("logo-color-changed");
});

$('#navbarNav a').click(function(){
    $('#navbarNav a').removeClass("active");
    $(this).addClass("active");

    /* $("#navbarButton").attr("aria-expanded","false");
    $("#navbarNav").addClass("collapse"); */
});

$('#portfolio-list a').click(function(){
    $('#portfolio-list a').removeClass("active");
    $(this).addClass("active");
});

$('#all').click(function(){
    $('#porfolio-projects .webapi').removeClass("webapihide").addClass("webapishow");
    $('#porfolio-projects .desktopapp').removeClass("desktopapphide").addClass("desktopappshow");
    $('#porfolio-projects .game').removeClass("gamehide").addClass("gameshow");
});

$('#webapi').click(function(){
    $('#porfolio-projects .webapi').removeClass("webapihide").addClass("webapishow");
    $('#porfolio-projects .desktopapp').removeClass("desktopappshow").addClass("desktopapphide");
    $('#porfolio-projects .game').removeClass("gameshow").addClass("gamehide");
});

$('#desktopapp').click(function(){
    $('#porfolio-projects .webapi').removeClass("webapishow").addClass("webapihide");
    $('#porfolio-projects .desktopapp').removeClass("desktopapphide").addClass("desktopappshow");
    $('#porfolio-projects .game').removeClass("gameshow").addClass("gamehide");
});

$('#game').click(function(){
    $('#porfolio-projects .webapi').removeClass("webapishow").addClass("webapihide");
    $('#porfolio-projects .desktopapp').removeClass("desktopappshow").addClass("desktopapphide");
    $('#porfolio-projects .game').removeClass("gamehide").addClass("gameshow");
});

});