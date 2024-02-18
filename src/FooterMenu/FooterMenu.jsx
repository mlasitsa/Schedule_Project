import React from 'react';
import './FooterMenu.css'
import {Link} from 'react-router-dom';
import facebooklogo from '/facebooklogo.png';
import instagramlogo from '/instagramlogo.png';
import linkedinlogo from '/linkedinlogo.png';

function FooterMenu() {
    return (
        <div className='footerMenu-footer'>
            <div className='footerMenu section-padding'>
                <div className='footerMenu-footer-links'>
                    <div className='footerMenu-footer-links-div'>
                        <h4>For Business</h4>
                        <a className='footerMenu-a' href='/employer'>
                            <p>Employer</p>
                        </a>
                        <a className='footerMenu-a' href='/healthplan'>
                            <p>Health Plan</p>
                        </a>
                        <a className='footerMenu-a' href='/individual'>
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className='footerMenu-footer-links-div'>
                        <h4>Resources</h4>
                        <a className='footerMenu-a' href='/resource'>
                            <p>Resource Center</p>
                        </a>
                        <a className='footerMenu-a' href='/resource'>
                            <p>Testimonials</p>
                        </a>
                        <a className='footerMenu-a' href='/resource'>
                            <p>TV</p>
                        </a>
                    </div>
                    <div className='footerMenu-footer-links-div'>
                        <h4>Partners</h4>
                        <a className='footerMenu-a' href='/partners'>
                            <p>The College of St. Scholastica</p>
                        </a>
                        <a className='footerMenu-a' href='/partners'>
                            <p>CodePath</p>
                        </a>
                        <a className='footerMenu-a' href='/partners'>
                            <p>Computer Science</p>
                        </a>
                    </div>
                    <div className='footerMenu-footer-links-div'>
                        <h4>Company</h4>
                        <a className='footerMenu-a' href='/company'>
                            <p>About Us</p>
                        </a>
                        <a className='footerMenu-a' href='/press'>
                            <p>Press</p>
                        </a>
                        <a className='footerMenu-a' href='/career'>
                            <p>Career</p>
                        </a>
                        <a className='footerMenu-a' href='/contact'>
                            <p>Contact Us</p>
                        </a>
                    </div>
                    <div className='footerMenu-footer-links-div'>
                        <h4>Coming Soon on</h4>
                        <div className='footerMenu-footer-socialmedia'>
                            <p><img src={facebooklogo}></img></p>
                            <p><img src={instagramlogo}></img></p>
                            <p><img src={linkedinlogo}></img></p>
                        </div>
                    </div>
                </div>

            <hr></hr>

            <div className='footerMenu-footer-below'>
                <div className='footerMenu-footer-copyright'>
                    <p>
                        @{new Date().getFullYear} Schedule.io All rights reserved.
                    </p>
                </div>
                <div className='footerMenu-footer-below-links'>
                    <a className='footerMenu-a' href='/terms'><div><p>Terms & Conditions</p></div></a>
                    <a className='footerMenu-a' href='/privacy'><div><p>Privacy</p></div></a>
                    <a className='footerMenu-a' href='/security'><div><p>Security</p></div></a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default FooterMenu;