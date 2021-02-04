function openNav() {
  document.getElementById("mySidenavLarge").style.width = "280px";
  //document.getElementById("dark-bg").style.display = 'block';
}

function closeNav() {
  document.getElementById("mySidenavLarge").style.width = "0";
  //document.getElementById("dark-bg").style.display = 'none';
}
function openNav2() {
  document.getElementById("mySidenavMobile").style.width = "280px";
  //document.getElementById("dark-bg").style.display = 'block';
}

function closeNav2() {
  document.getElementById("mySidenavMobile").style.width = "0";
  //document.getElementById("dark-bg").style.display = 'none';
}
$(document).ready(function (){
  //more nav list
  $(".open-more-large").click(function() {
    $(".main-nav-list-large, .more-nav-list-large").addClass("more-active");
  })
  $(".more-nav-list-btn-back").click(function() {
    $(".main-nav-list-large, .more-nav-list-large").removeClass("more-active");
  })

  // mobile menu sub category toggle
  $(".mobile-categories").click(function() {
    $(this).toggleClass("sub-ctg-active");
  })
})


  
  $(document).ready(function () {
    //header search click to expand 
    $(".cs-btn-submit").click(function() {
      $(".cs-txt-livesearch").addClass("sopen");
      $(".cs-btn-close").addClass("cs-show");
      $(".cs-btn-submit").addClass("cs-hide");
    })

    $(".cs-btn-close").click(function() {
      $(".cs-txt-livesearch").removeClass("sopen");
      $(".cs-btn-close").removeClass("cs-show");
      $(".cs-btn-submit").removeClass("cs-hide");
    })

    //mobile footer search activation
    $('.footer-search-open').click(function(e){
      e.preventDefault();
      $('#mobile-header-search').toggleClass('mobile-open');
    })
    // $('.footer-device-mobile').on('click', '.footer-search-open', function(e){
    //   e.preventDefault;
    //   $('#mobile-header-search').toggleClass('mobile-open');
    // })


    //mobile footer cart activation
    $('.footer-cart-open').click(function(e){
      e.preventDefault();
      $('#mobile-cart').toggleClass('cart-open'); 
    })
    /*if div outside click to close div
    $('.footer-cart-open').click(function(e){
      e.preventDefault;
      $('#mobile-cart').toggleClass('cart-open').focus(); 
    })
    $('#mobile-cart').on('focusout', function () {
      $('#mobile-cart').removeClass('cart-open');
    });*/

    

    //select multiple quantity options
    $(".qt-select-open.qt-multiple-open").click(function() {
      $(".qt-drop-wrapper.qt-multiple").css("transform","translateY(0)");
    })
    $(".qt-btn-close.qt-multiple-close").click(function() {
      $(".qt-drop-wrapper.qt-multiple").css("transform","translateY(100%)");
    })

    //select single quantity options
    $(".qt-select-open.qt-single-open").click(function() {
      $(".qt-drop-wrapper.qt-single").css("transform","translateY(0)");
    })
    $(".qt-btn-close.qt-single-close").click(function() {
      $(".qt-drop-wrapper.qt-single").css("transform","translateY(100%)");
    })

    //open cart quantity
    $(".qt-btn-ad-to-cart.cart-multiple").click(function() {
      $(".quantity-wrapper.multiple-quantity").css("top","0");
    })
    $(".qt-btn-ad-to-cart.cart-single").click(function() {
      $(".quantity-wrapper.single-quantity").css("top","0");
    })


  })

  

  



