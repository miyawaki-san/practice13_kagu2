// slick設定(parmtop)
$(function() {
$('.slider--parmtop').slick({
  slidesToScroll:1,
  autoplaySpeed: 3000,
  dots:true,
  arrows:false,
});
});

// slick設定(desktop)
$(function() {
  $('.slider--desktop').slick({
    slidesToScroll:1,
    autoplaySpeed: 3000,
    dots:true,
    arrows:false,
  });
  });


  // ウインドウ幅1024px以上でコンパクトメニューは強制終了
  var timer = false;
  $(window).resize(function(){
    if (timer !== false){
      clearTimeout(timer);
    }
    timer = setTimeout(function(){
    var windowWidth = window.innerWidth;
    if (windowWidth >= 959){
      $('#header').removeClass('open');
    }
  },200);
});

// ハンバーガメニュー開閉
$('.burgerBtn').on('click',function(){
  $('#header').toggleClass('open');
});


// スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    // コンパクトメニュー選択時は、コンパクトメニューを閉じる
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    }
    return false;
  });
});