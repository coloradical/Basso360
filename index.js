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
