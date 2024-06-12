import React from 'react';
import './FooterMenu.css'
import {Link} from 'react-router-dom';
import facebooklogo from '/facebooklogo.png';
import instagramlogo from '/instagramlogo.png';
import linkedinlogo from '/linkedinlogo.png';
import { useLocation } from 'react-router-dom';

function FooterMenu() {

    const location = useLocation();

    const footerClassName = () => {
        if (location.pathname.startsWith('/dashboard')) {
            return 'footerMenu-footer-dashboard';
        }
        else {
            return 'footerMenu-footer';
        }
    };

    return (
        <div className={footerClassName()}>
            <div className='footerMenu section-padding'>
                <div className='footerMenu-footer-links'>
                    <div className='footerMenu-footer-links-div'>
                        <h4>Quick Links</h4>
                        <a className='footerMenu-a' href='/features'>
                            <p>Features</p>
                        </a>
                        <a className='footerMenu-a' href='/pricing'>
                            <p>Pricing</p>
                        </a>
                        <a className='footerMenu-a' href='/login'>
                            <p>Login/Sign Up</p>
                        </a>
                    </div>
                    <div className='footerMenu-footer-links-div'>
                        <h4>Contact Information</h4>
                        <a className='footerMenu-a' href='/resource'>
                            <p>support@schedule.io</p>
                        </a>
                        <a className='footerMenu-a' href='/resource'>
                            <p>+1 (929) 708 - 25 - 09</p>
                        </a>
                        <a className='footerMenu-a' href='/resource'>
                            <p>1200 Kenwood Ave, Duluth, MN, 55811</p>
                        </a>
                    </div>
                    <div className='footerMenu-footer-links-div'>
                        <h4>Partners</h4>
                        <a className='footerMenu-a' href='https://www.css.edu/' target="_blank" rel="noopener noreferrer">
                            <p>The College of St. Scholastica</p>
                        </a>
                        <a className='footerMenu-a' href='https://www.linkedin.com/in/kris-glesener/' target="_blank" rel="noopener noreferrer">
                            <p>Kris Glesener</p>
                        </a>
                        <a className='footerMenu-a' href='https://www.linkedin.com/in/maxlasitsa/' target="_blank" rel="noopener noreferrer">
                            <p>Maxim Lasitsa</p>
                        </a>
                        <a className='footerMenu-a' href='https://www.linkedin.com/in/malcolm-tees-debeyer-71661b160/' target="_blank" rel="noopener noreferrer">
                            <p>Malcolm Tees-DeBeyer</p>
                        </a>
                    </div>
                    <div className='footerMenu-footer-links-div'>
                        <h4>Company</h4>
                        <a className='footerMenu-a' href='/about'>
                            <p>About Us</p>
                        </a>
                        <a className='footerMenu-a' href='/faq'>
                            <p>FAQ</p>
                        </a>
                        <a className='footerMenu-a' href='/contact'>
                            <p>Contact Us</p>
                        </a>
                        <a className='footerMenu-a' href='/login'>
                            <p>Login/Sign Up</p>
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

            <hr className='footerMenu-hr'></hr>

            <div className='footerMenu-footer-below'>
                <div className='footerMenu-footer-copyright'>
                    <p>
                        ©{new Date().getFullYear()} Schedule.io All rights reserved.
                    </p>
                </div>
                <div className='footerMenu-footer-below-links'>
                    <a className='footerMenu-a' href='/termsnconditions'><div><p>Terms & Conditions</p></div></a>
                    <a className='footerMenu-a' href='/privacypolicy'><div><p>Privacy Policy</p></div></a>
                    <a className='footerMenu-a' href='/cookiepolicy'><div><p>Cookie Policy</p></div></a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default FooterMenu;