class SiteFooter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <footer>
                <div class="container footer-content">
                    <div class="footer-column footer-brand-column">
                        <h3>ARTrans Consult</h3>
                        <p>Engineering Excellence</p>
                    </div>
                    <div class="footer-column footer-sitemap-column">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="projects.html">Projects</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-column footer-social-column">
                        <h4>Connect</h4>
                        <div class="footer-social-links">
                            <a href="https://www.linkedin.com/in/alan-robinson-1b993722/" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
                            <a href="#"><i class="fab fa-twitter"></i> Twitter</a>
                            <a href="mailto:email@example.com"><i class="fas fa-envelope"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2026 ARTrans Consult. All Rights Reserved.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('site-footer', SiteFooter);
