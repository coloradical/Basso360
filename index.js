
var mobileMenuClick = 0;
function toggleMobileMenu(){
  mobileMenuClick++;
  console.log(mobileMenuClick);
  if (mobileMenuClick % 2 == 0){
    document.getElementById("mobile-menu-img").src = "assets/menu.svg";
    $("#mobile-menu-dropdown").fadeOut()
  } else {
    document.getElementById("mobile-menu-img").src = "assets/close.svg";
    $("#mobile-menu-dropdown").fadeIn()
  }
}

$('play-btn-wrapper').hover(function(){
  console.log("hovered");
  $('#play-btn-message').fadeIn()
}
  
)

function closeVideo(){
  $('#video-window').fadeOut()
  $('#full-hype-video').attr('src', '')
}

function openVideo(){
  $('.hero-trim').css('z-index', '99999999')
  $('#video-window').fadeIn()
  $('#video-window').css('display', 'flex')
  $('#full-hype-video').attr('src', 'assets/Basso360-Hype-Reel-full.mp4')
}

