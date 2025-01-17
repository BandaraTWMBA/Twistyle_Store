import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import instagram from '../../assets/instagram.png';
import envelope from '../../assets/envelope.png';
import phoneflip from '../../assets/phone-flip.png';
import whatsapp from '../../assets/whatsapp.png';

const Footer = () => {
    return (
        <div className="footer">
            {/* Logo Section */}
         <div className='footer-first'>
            <div className="footer-logo">
                <img src={logo} alt="footer logo" />
                <p>
                    At Twistyle, our mission is to empower individuals to express their unique style through carefully curated,
                    high-quality accessories. We strive to create a welcoming space where fashion meets affordability,
                    offering products that inspire confidence and individuality.
                </p>
            </div>

            {/* Links and Social Media Section */}
            <div className="footer-elements">
                {/* Footer Links */}
                <ul className="footer-links">
                    <li>
                        <h3><a href="http://localhost:5173/support">SUPPORT</a></h3>
                        <br/>
                        <li>Search</li>
                        <li>Login</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Sale</li>
                        <li><p>.............</p></li>
                        
                    </li>
                    <li><h3><a href='http://localhost:5173/Info'>INFO</a></h3>
                    <br/>
                        <li>Shipping</li>
                        <li>Terms<br/> & <br/>conditions</li>
                        <li><p>.............</p></li>
                    
                    </li>
                    <li><h3>CONNECT</h3>
                    <br/>
                        <li>No.79/B,<br/>Kulupana Junction,<br/>Pokunuwita.</li>
                        <li><p>.............</p></li>

                    </li>
                </ul>

                {/* Social Media Icons */}
                <div className="footer-social-icon">
                    <div className="footer-icons-container">
                    <a href="https://email.com/lander" target="_blank"> <img src={envelope} alt="envelope" /></a>
                    </div>
                    <div className="footer-icons-container">
                    <a href="https://www.youtube.com/watch?v=iQod_uvewIM" target="_blank"> <img src={phoneflip} alt="phone" /></a>
                    </div>
                    <div className="footer-icons-container">
                    <a href="https://web.whatsapp.com/" target="_blank"> <img src={whatsapp} alt="whatsapp" /></a>
                    </div>
                    <div className="footer-icons-container">
                    <a href="https://www.instagram.com/accounts/login/?hl=en"  target="_blank"><img src={instagram} alt="instagram" /></a>
                    </div>
                </div>
            </div>
         </div>
            
         <div className="footer-copyright">
                <hr />
                <p>Copyright &copy; 2025 - All Rights Reserved</p>
         </div>
        </div>
    );
};

export default Footer;
