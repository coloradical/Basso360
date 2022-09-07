$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

var mobileMenuClick = 0;
function toggleMobileMenu(){
  mobileMenuClick++;
  console.log(mobileMenuClick);
  if (mobileMenuClick % 2 == 0){
    document.getElementById('main-header').style.height = "150px";
    document.getElementById('nav-container').style.display = "none";
    document.getElementById("mobile-menu-img").src = "assets/menu.svg";

  } else {
    document.getElementById("mobile-menu-img").src = "assets/close.svg";
    document.getElementById('main-header').style.height = "100vh";
    document.getElementById('nav-container').style.display = "block";
    document.getElementById('nav-container').style.height = "65vh";
    document.getElementById('nav-container').style.marginTop = "5vh";
    document.getElementsByClassName('nav-container-content').style.display = "flex";
  }
}

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("main-header").style.height = "75px";
    document.getElementById("main-header").style.backgroundColor = "#091D3D";
    document.getElementById("main-logo-img").src = "assets/basso360-white.png";
    var navItems = document.getElementsByClassName('nav-item');
    for (let i = 0; i < navItems.length; i++){
      navItems[i].style.color = "white";
    }

  } else {
    document.getElementById("main-header").style.height = "150px";
    document.getElementById("main-header").style.backgroundColor = "#F1E9D4";
    document.getElementById("main-logo-img").src = "assets/360basso-motto.png";
    var navItems = document.getElementsByClassName('nav-item');
    for (let i = 0; i < navItems.length; i++){
      navItems[i].style.color = "#204367";
    }
  }
}

