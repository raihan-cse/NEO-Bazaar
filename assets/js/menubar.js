
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

    //more categories
    $(".open-more").click(function() {
      $(".cat-menu-more").css("transform","translateX(0)");
    })
    $(".btn-back").click(function() {
      $(".cat-menu-more").css("transform","translateX(100%)");
    })
  })


  



