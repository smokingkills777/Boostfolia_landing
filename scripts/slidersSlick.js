$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        responsive: [ 
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    });
    $('.slider__team').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true
    });
});