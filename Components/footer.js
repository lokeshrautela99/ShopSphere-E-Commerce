const footer = () => {
    return `
    <div class="footer-container">
            <div class="footer-section">
                <h3>ShopSphere</h3>
                <p>Welcome to ShopSphere, your go-to destination for quality products and exceptional service. Explore a world of seamless and secure shopping with us. Discover the sphere of possibilities at ShopSphere today!</p>
            </div>
            <div class="footer-section">
                <h4>Shop</h4>
                <ul>
                    <li><a href="fashion.html">Fashion</a></li>
                    <li><a href="electronics.html">Electronics</a></li>
                    <li><a href="books.html">Books</a></li>
                    <li><a href="homeDecor.html">Home Decor</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="privacy.html">Privacy Policy</a></li>
                    <li><a href="registration.html">Registration</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Subscribe to our Newsletter</h4>
                <form id="subscribe-form">
                    <input type="email" id="email" placeholder="Enter your email" required>
                    <button type="submit">Subscribe</button>
                </form>
                <p id="subscription-message"></p>
            </div>
            
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 ShopSphere. All rights reserved.</p>
        </div>
    `;
}
export default footer;