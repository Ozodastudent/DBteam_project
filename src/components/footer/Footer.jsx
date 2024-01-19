import React from "react";
import "./footer.css";



const Footer = () => {
    return(
       
<footer className="footer_section">
                <div className="footer_content">
                    <div className="footer_contact">
                        <div className="footer_logo">
                            <img src="path-to-your-logo.png" alt="Rezilla Logo" />
                            <p>Rezilla</p>
                        </div>
                        <address>
                            2728 Hickory Street<br />
                            Salt Lake City, UT 84104
                        </address>
                        <p>📞 +1 206-214-2298</p>
                        <p>✉️ support@rezilla.com</p>
                    </div>
                    <div className="footer_links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Listings</li>
                            <li>Services</li>
                            <li>Blogs</li>
                            <li>Become a Agent</li>
                        </ul>
                    </div>
                    <div className="footer_discovery">
                        <h4>Discovery</h4>
                        <ul>
                            <li>Canada</li>
                            <li>United States</li>
                            <li>Germany</li>
                            <li>Africa</li>
                            <li>India</li>
                        </ul>
                    </div>
                    <div className="footer_newsletter">
                        <h4>Subscribe to our Newsletter!</h4>
                        {/* Subscription form */}
                        <input type="email" placeholder="Email Address" />
                        <button>➡️</button>
                        <p>Follow Us on</p>
                        {/* Social icons */}
                        <div className="social_links">
                            {/* Icons for LinkedIn, Facebook, Instagram */}
                        </div>
                    </div>
                </div>
                <div className="footer_legal">
                    <p>© Rezilla - All rights reserved</p>
                    <ul className="legal_links">
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Disclaimer</li>
                    </ul>
                </div>
            </footer> 
    )
}
export default Footer;