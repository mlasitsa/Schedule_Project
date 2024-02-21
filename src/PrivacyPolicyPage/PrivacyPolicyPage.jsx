import React from 'react';
import '/src/PrivacyPolicyPage/PrivacyPolicyPage.css';
import privacypolicypagelogo from '/privacypolicylogo.png';
import privacypolicypagelogotwo from '/privacypolicypagelogotwo.png';
import polictydata from './privacypolicy.data';
import { useState } from 'react';
import policydata from './privacypolicy.data';

function PrivacyPolicyPage() {

    const [isHovered, setIsHovered] = useState(null);
   
// I can make a new array that would have same data as originla one,
// then split this array in two arrays and map twice ??? 

    return (
        <div>
            <h1 className='privacyPolicyPage-title'>PRIVACY POLICY</h1>
            <p className='privacyPolicyPage-description'>We value your privacy and are committed to protecting your personal information. This policy outlines the types of information we collect, how it's used, and safeguarded</p>
            <div className='privacyPolicyPage-box'>
                <div className='privacyPolicyPage-answer'>
                    {polictydata.map((policy,index) => (
                    <div 
                        onMouseEnter={() => setIsHovered(index)}
                        onMouseLeave={() => setIsHovered(null)}>

                    <div className={index <= ((policydata.length)/2 - 1) ? 'privacyPolicy-text-right':'privacyPolicy-text-left'}>
                        <h4 className={isHovered == index ? '': ''}>{policy.policyName}</h4>
                        <p className={isHovered == index ? '': ''}>{policy.policyAnswer}</p>
                    </div>  
                    </div>
                ))}

                </div>
                        <div className='privacypolicy-image-left'>
                            <img src={privacypolicypagelogo}></img>  
                        </div>
                        
                        <div className='privacypolicy-image-right'>
                            <img src={privacypolicypagelogotwo}></img> 
                        </div>
                        
            </div>        
        </div>
    )
}

export default PrivacyPolicyPage;