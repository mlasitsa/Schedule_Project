import React from 'react';
import '/src/PrivacyPolicyPage/PrivacyPolicyPage.css';
import privacypolicypagelogo from '/privacypolicylogo.png';
import privacypolicypagelogotwo from '/privacypolicypagelogotwo.png';
import polictydata from './privacypolicy.data';
import { useState } from 'react';


function PrivacyPolicyPage() {

    const [isHovered, setIsHovered] = useState(null);
    const splitPoint = ((polictydata.length/2));
    const rightText = polictydata.slice(0,splitPoint);
    const leftText = polictydata.slice(splitPoint);

    return (
        <div>
            <h1 className='privacyPolicyPage-title'>PRIVACY POLICY</h1>
            <p className='privacyPolicyPage-description'>We value your privacy and are committed to protecting your personal information. This policy outlines the types of information we collect, how it's used, and safeguarded</p>
            <div className='privacyPolicyPage-box'>
                
                <div className='privacyPolicyPage-answer-row-reverse'>
                <div className='privacyPolicyPage-column'>
                    {rightText.map((policy,index) => (
                    <div 
                        onMouseEnter={() => setIsHovered(index)}
                        onMouseLeave={() => setIsHovered(null)}>
                   
                    <div className='privacyPolicyPage-text-right'>
                        <h4 className={isHovered == index ? '': ''}>{policy.policyName}</h4>
                        <p className={isHovered == index ? '': ''}>{policy.policyAnswer}</p> 
                    </div>
                   
                    
                    </div>
                
                ))}
                </div>

                    <div className='privacypolicy-image-left'>
                        <img src={privacypolicypagelogo}></img>  
                    </div>
                </div>
               
                        
                
                <div className='privacyPolicyPage-answer-row'>
                <div className='privacyPolicyPage-column'>
                    {leftText.map((policy,index) => (
                    <div className='privacyPolicyPage-text-left'
                        onMouseEnter={() => setIsHovered(index)}
                        onMouseLeave={() => setIsHovered(null)}>

                        <h4 className={isHovered == index ? '': ''}>{policy.policyName}</h4>
                        <p className={isHovered == index ? '': ''}>{policy.policyAnswer}</p> 
                    </div>
                ))}
                </div>
                    <div className='privacypolicy-image-right'>
                        <img src={privacypolicypagelogotwo}></img> 
                    </div>
                </div>
                        
                        
            </div>        
        </div>
    )
}

export default PrivacyPolicyPage;