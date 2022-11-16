class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <style>
        footer {background: #0B1A3C; width: 100%; padding: 25px;}
        .footer-logo-container {display: flex; justify-content: space-between; align-items: center;}
        #footer-nav-list { margin: 25px 0; display: flex; align-items: center; justify-content: space-between; }
        #footer-nav-list a {color: rgba(255,255,255,0.6); text-decoration: none; width: 100%; margin: 0 10px;}
        #footer-nav-list a:hover {font-weight: 600; cursor: pointer; color: white; text-decoration: underline;}
        ul li a:hover {font-weight: 600; cursor: pointer; color: white;}
        .social-list {text-align: right; list-style-type: none;}
        .social-list li a {color: white; font-size: 14px; text-decoration: none;}
        @media only screen and (max-width: 650px) {
        .footer-logo-container {display: block; text-align: center;}
        ul li {text-align: center;}
        }
    </style>
    <footer>
        <div class="footer-logo-container">
            <img src="assets/basso360-white.png" style="width: 150px;" alt="basso 360 logo in white">
            <div>
                <div id="footer-nav-list">
                    <a href="/">Home</a>
                    <a href="work.html">Work</a>
                    <a href="approach.html">Approach</a>
                    <a href="team.html">Team</a>
                    <a href="contact.html">Contact</a>
                  </div>
                  <ul class="social-list">
                      <li><a href="tel:2106634030">&#9742; &nbsp; (210) 663-4030</a></li>
                      <li><a href="mailto:cory@basso360.com"><span style="font-size: 18px;">✉</span> &nbsp; cory@basso360.com</a></li>
                  </ul>
            </div>
        </div>
       
        <p style="color: white; font-size: 14px; text-align: center;">Copyright &copy; 2022 - Basso 360 Consulting<br>
        <span style="color: gray; cursor: pointer;" onclick="window.open('https://designelixir.studio')">Made with &hearts; by Design Elixir</span></p>
        <div style="width: 100%; text-align: center;">
            <a href=""><img style="height: 20px" src="assets/linkedin.svg"></a>&nbsp;&nbsp;
            <a href=""><img style="height: 20px" src="assets/facebook.svg"></a>
        </div>
    </footer>
        `;
    }
  }
  
  customElements.define('footer-component', Footer);
  
