class SiteFooter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <footer>
                <div class="container footer-content">
                    <div class="footer-brand">
                        <h3>ARTrans Consult</h3>
                        <p>Engineering Excellence</p>
                    </div>
                    <div class="footer-links">
                        <a href="https://www.linkedin.com/in/alan-robinson-1b993722/" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="mailto:email@example.com"><i class="fas fa-envelope"></i></a>
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
