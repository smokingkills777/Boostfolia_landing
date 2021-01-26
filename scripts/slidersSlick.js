$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true
    });
    $('.slider__team').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true
    });
});