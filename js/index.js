$('.loop').owlCarousel({
    center: false,
    items:1,
    loop:true,
    nav:false,
    dots:true,
    autoWidth:false,
    autoplayHoverPause:true,
    // margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        992:{ //992以上
          center: false,
          items:1,
          nav:false,
          dots:true,
          autoWidth:false,
          autoplayTimeout:5000,
        },
        1140:{ //1140以上
          center: true,
          items:2,
          nav:true,
          dots:false,
          autoWidth:true,
          autoplayTimeout:5000,
        }
    }
});

$('.toggle-dropmenu').click(function(){
    $(this).toggleClass('show');
    $(this).parent().siblings('.sub-dropmenu').toggleClass('show');
});