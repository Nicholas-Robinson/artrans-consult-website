class SiteHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <nav class="navbar">
                <div class="container nav-container">
                    <div class="logo">
                        <a href="index.html"><span class="logo-highlight">ART</span>rans Consult.</a>
                    </div>
                    <ul class="nav-links">
                        <li><a id="nav_index" href="index.html">Home</a></li>
                        <li><a id="nav_profile" href="profile.html">Profile</a></li>
                        <li><a id="nav_projects" href="projects.html">Projects</a></li>
                        <li><a id="nav_insights" href="insights.html">Insights</a></li>
                        <li><a id="nav_services" href="services.html">Expertise</a></li>
                        <li><a id="nav_contact" href="contact.html">Contact</a></li>
                    </ul>
                    <div class="burger">
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>
                </div>
            </nav>
        `;
    }

    connectedCallback() {
        const burger = this.querySelector('.burger');
        const nav = this.querySelector('.nav-links');
        const navLinks = this.querySelectorAll('.nav-links li');

        if (burger) {
            burger.addEventListener('click', () => {
                // Toggle Nav
                nav.classList.toggle('nav-active');

                // Animate Links
                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = '';
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                    }
                });

                // Burger Animation
                burger.classList.toggle('toggle');
            });
        }

        // Initialise the active menu item
        const currentPath = window.location.pathname.match(/\/(\w+)\.html/);
        if (currentPath) {
            nav.querySelector(`#nav_${currentPath[1]}`).classList.add('active');
        }

    }
}

customElements.define('site-header', SiteHeader);
