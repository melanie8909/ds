// 首頁Banner輪播
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

// 商品頁推薦商品輪播
$('.recommend-loop').owlCarousel({
    center: true,
    items:2,
    loop:true,
    nav:false,
    dots:true,
    autoWidth:false,
    autoplayHoverPause:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    // autoHeight:true,
    responsive:{
        992:{ //992以上
          center: true,
          items:2,
          nav:false,
          dots:true,
          autoWidth:false,
          autoplayTimeout:5000,
        },
        1140:{ //1140以上
          center: false,
          items:3,
          nav:true,
          dots:false,
          autoWidth:false,
          autoplayTimeout:5000,
        }
    }
});

// 側邊選單
$('.toggle-dropmenu').click(function(){
    $(this).toggleClass('show');
    $(this).parent().siblings('.sub-dropmenu').toggleClass('show');
});

// 價格按鈕切換
function low2high(){
    $("#low2high").css("display","none");
    $("#high2low").css("display","block");
}
function high2low(){
    $("#high2low").css("display","none");
    $("#low2high").css("display","block");
}