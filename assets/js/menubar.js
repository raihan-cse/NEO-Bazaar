
function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
    //document.getElementById("dark-bg").style.display = 'block';
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    //document.getElementById("dark-bg").style.display = 'none';
  }
  function openNav2() {
    document.getElementById("mySidenav-2").style.width = "280px";
    //document.getElementById("dark-bg").style.display = 'block';
  }
  
  function closeNav2() {
    document.getElementById("mySidenav-2").style.width = "0";
    //document.getElementById("dark-bg").style.display = 'none';
  }

  /* =============
    more nav list
    ============= */
    $(".open-more").click(function() {
      $(".main-nav-list, .more-nav-list").addClass("more-active");
    })
    $(".more-nav-list-btn-back").click(function() {
      $(".main-nav-list, .more-nav-list").removeClass("more-active");
    })

    // ====================
    // mobile footer search
    // ====================
    // $('.footer-search-open').click(function(e){
    //   e.preventDefault;
    //   $('#indo').addClass('open');
    // })

  
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

  

  



