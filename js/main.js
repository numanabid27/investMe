$('.owl-carousel.testimonial').owlCarousel({
    loop:true,
    margin:30,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1,
            stagePadding: 60
        },
        
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
}) 