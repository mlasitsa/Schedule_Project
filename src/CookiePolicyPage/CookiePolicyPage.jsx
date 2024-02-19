import React from 'react';
import '/src/CookiePolicyPage/CookiePolicyPage.css'
import cookiespolicylogo from '/cookiespolicylogo.png';
import { useState } from 'react';
import cookiedata from './cookiepolicy.data';

function CookiePolicyPage() {
    
const [isHovered, setIsHovered] = useState(null);


    return (
        <div className='cookiePolicyPage-page'>
            <h1 className='cookiePolicyPage-title'>COOKIE POLICY</h1>
            <p className='cookiePolicyPage-description'> Schedule.io uses cookies to enhance user experience, analyze platform performance, and personalize content.</p>
            <div className='cookiePolicyPage-box'>
                    {cookiedata.map((cookie,index) => (
                        <div className='cookiePolicyPage-content' 
                            onMouseEnter={() => setIsHovered(index)}
                            onMouseLeave={() => setIsHovered(null)}>
                        
                            <h4 className={isHovered == index ? 'cookiePolicyPage-content-active': 'cookiePolicyPage-content'}>{cookie.title}</h4>
                            <p className={isHovered == index ? 'cookiePolicyPage-content-active':'cookiePolicyPage-content'}>{cookie.description}</p>
                    
                        </div>
                    ))}
                        <div className='cookiePolicy-image'>
                        <img src={cookiespolicylogo}></img>
                        </div>
            </div>
        </div>
    )
}

export default CookiePolicyPage;