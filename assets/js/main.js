$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    rtl:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:true,
            dots:false
        },
        600:{
            items:3,
            nav:false,
            loop:true
        },
        1000:{
            items:4,
            nav:false,
            loop:true,
            dots:true
        }
    }
})
$(".my-rating-4").starRating({
    totalStars: 5,
    starShape: 'rounded',
    starSize: 40,
    emptyColor: 'lightgrey',
    hoverColor: '#ff4057',
    activeColor: '#ff4057',
    rtl:true,
    useGradient: false
  });
