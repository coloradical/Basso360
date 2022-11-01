const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `

<link rel="stylesheet" href="combo.css">

<header id="main-header" class="box-shadow">
    <div class="header-content">
    <span id="main-logo"><img id="main-logo-img" onclick="location.href='home.html';" 
        src="assets/360basso-motto.png"/></span>
    <span id="mobile-menu" style="display: none"><img id="mobile-menu-img" style="height: 35px" class="hoverme" src="assets/menu.svg" onclick="toggleMobileMenu()"/></span>

    <div id="nav-container">
        <div class="nav-container-content">
        <a class="active nav-item" href="home.html">Home</a>
        <a class="nav-item" href="work.html">Work</a>
        <a class="nav-item" href="approach.html">Approach</a>
        <a class="nav-item" href="team.html">Team</a>
        <a class="nav-item" href="contact.html">Contact</a>
        </div>
    </div>
    </div>
</header>

<script src="index.js"></script>
`


class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
        
    }
}

customElements.define('header-component', Header);

