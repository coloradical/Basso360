class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <style>
        #main-header {height: 150px; padding: 25px; background-color: #F1E9D4; display: block; z-index: 999999;}
        .header-content {width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;}
        #main-logo {height: 100%; display: flex; align-items: center; justify-content: center;}
        #main-logo-img {height: 100%; width: auto; max-height: 150px;}
        #main-logo img:hover {transform: scale(1.1); cursor: pointer;}
        #nav-container {width: 75%; height: 100%;}
        #nav-container-content {display: flex; height: 100%; width: 100%; align-items: center; justify-content: flex-end; flex-wrap: wrap;}
        .nav-item {color: #A8AFAE; font-weight: 700; font-size: 22px; white-space: nowrap; text-decoration: none; margin: 10px; text-align: right; line-height: 0px; font-family: tablet-gothic-wide, sans-serif;}
        .active {color: #0B1B3D}
        .nav-item:hover {color: #204367; transform: scale(1.05);}
        #mobile-nav-container { height: 50%;}
        #mobile-menu-nav-list {list-style-type: none;}
        #mobile-menu-nav-list li {padding: 10px 0px; text-align: center;}
        
        @media only screen and (min-width: 950px) {
        #mobile-menu-dropdown {display: none;}
        }
        @media only screen and (max-width: 950px) {
        #nav-container {width: 100%; display: none;}
        .nav-item {width: 100% !important;}
        .logo-menu-container {width: 100%;}
        #mobile-menu {display: block !important;}
        }
        
        </style>
        <header id="main-header">
              <div class="header-content" id="header-content">
                <span id="main-logo"><img id="main-logo-img" onclick="location.href='home.html';" src="assets/360basso-motto.png"/></span>
                <span id="mobile-menu" style="display: none"><img id="mobile-menu-img" style="height: 35px;" class="hoverme" src="assets/menu.svg" onclick="toggleMobileMenu()"/></span>
            
                <div id="nav-container">
                  <div id="nav-container-content">
                    <a class="nav-item home-link"id="home-link" href="index.html">Home</a>
                    <a class="nav-item work-link" href="work.html">Work</a>
                    <a class="nav-item approach-link" href="approach.html">Approach</a>
                    <a class="nav-item team-link" href="team.html">Team</a>
                    <a class="nav-item contact-link" href="contact.html">Contact</a>
                  </div>
                </div>
              </div>
            </header>
        
            <div id="mobile-menu-dropdown" style="display: none; width: 100vw; height: calc(100vh - 150px);  background: #F1E9D4; position: absolute;">
              <div style="height: 50%; width: 100%; margin-top: 10%; display: flex; align-items: center; justify-content: center;">
                <ul id="mobile-menu-nav-list">
                    <li><a class="nav-item home-link" href="index.html">Home</a></li>
                    <li><a class="nav-item work-link" href="work.html">Work</a></li>
                    <li><a class="nav-item approach-link" href="approach.html">Approach</a></li>
                    <li><a class="nav-item team-link" href="team.html">Team</a></li>
                    <li><a class="nav-item contact-link" href="contact.html">Contact</a></li>
                </ul>
              </div>
            </div>
        `;
    }
  }
  
  customElements.define('header-component', Header);
  

var mobileMenuClick = 0;
function toggleMobileMenu(){
  mobileMenuClick++;
  console.log(mobileMenuClick);
  if (mobileMenuClick % 2 == 0){
    document.getElementById("mobile-menu-img").src = "assets/menu.svg";
    $("#mobile-menu-dropdown").fadeOut()
    $(".play-btn-wrapper").fadeIn()
  } else {
    document.getElementById("mobile-menu-img").src = "assets/close.svg";
    $(".play-btn-wrapper").fadeOut()
    $("#mobile-menu-dropdown").fadeIn()
  }
}

const getPageName = document.querySelector('html').getAttribute("data-page-name");

if (getPageName === "home"){$('.home-link').css("color", "#0B1B3D")}
else if (getPageName === "work"){$('.work-link').css("color", "#0B1B3D")}
else if (getPageName === "approach"){$('.approach-link').css("color", "#0B1B3D")}
else if (getPageName === "team"){$('.team-link').css("color", "#0B1B3D")}
else if (getPageName === "contact"){$('.contact-link').css("color", "#0B1B3D")}
else {$('.nav-link').css("color", "inherit")}


console.log(getPageName)


