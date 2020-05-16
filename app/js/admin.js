'use strict';
// anggular route 
// thả nổi menu khi cuộn trang
      // cach 1 
      jQuery(document).ready(function ($) {
        pos = $("#menuTop").position();
        /* pos = $('#menuTop').offset().top;*/
        $(window).scroll(function () {
          var posScroll = $(document).scrollTop();
          if (parseInt(posScroll) > parseInt(pos.top - 1)) {
            $("#menuTop").addClass("fixed");
          } else {
            $("#menuTop").removeClass("fixed");
          }
        });
      });
      // cach 2
      window.onscroll = function () {
        myFunction();
      };

      var nav1 = document.getElementById("mySidenav");
      var nav2 = document.getElementById("mySidenav2");
      var sticky = nav1.offsetTop;
      var aa = sticky - 57;

      function myFunction() {
        if (window.pageYOffset > aa) {
          nav1.classList.add("fixLeftmenu");
          nav2.classList.add("fixLeftmenu");
        } else {
          nav1.classList.remove("fixLeftmenu");
          nav2.classList.remove("fixLeftmenu");
        }
      }

      //click menu
      function openNav() {
        document.getElementById("mySidenav").style.width = "230px";
      }

      function closeNav() {
        document.getElementById("mySidenav").style.width = "0px";
      }