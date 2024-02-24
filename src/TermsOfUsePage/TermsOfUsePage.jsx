import React from 'react';
import '/src/TermsOfUsePage/TermsOfUsePage.css';
import { useState } from 'react';
import termsofusedata from './termsofuse.data';
import termsconditionsleft from '/termsconditionsleft.png'
import termsconditionsright from '/termsconditionsright.png'


function TermsOfUsePage() {

    const [isHovered, setIsHovered] = useState(null);
    const splitPoint = ((termsofusedata.length/2));
    const rightText = termsofusedata.slice(0,splitPoint);
    const leftText = termsofusedata.slice(splitPoint);


    return (
        <div>
            <h1 className='termsOfUsePage-title'>TERMS OF USE AND CONDITIONS</h1>
            <p className='termsOfUsePage-description'>By accessing Schedule.io, you agree to these terms, which govern your use of our platform</p>
        
            <div className='termsOfUsePagee-box'>
                
                <div className='termsOfUsePage-answer-row-reverse'>
                <div className='termsOfUsePage-column'>
                    {rightText.map((term,index) => (
                    <div 
                        onMouseEnter={() => setIsHovered(index)}
                        onMouseLeave={() => setIsHovered(null)}>
                   
                    <div className='termsOfUsePage-text-right'>
                        <h4 className={isHovered == index ? '': ''}>{term.termsName}</h4>
                        <p className={isHovered == index ? '': ''}>{term.termsAnswer}</p> 
                    </div>
                   
                    
                    </div>
                
                ))}
                </div>

                    <div className='termsOfUsePage-image-left'>
                        <img src={termsconditionsright}></img>  
                    </div>
                </div>
               
                        
                
                <div className='termsOfUsePage-answer-row'>
                <div className='termsOfUsePage-column'>
                    {leftText.map((term,index) => (
                    <div className='termsOfUsePage-text-left'
                        onMouseEnter={() => setIsHovered(index)}
                        onMouseLeave={() => setIsHovered(null)}>

                        <h4 className={isHovered == index ? '': ''}>{term.termsName}</h4>
                        <p className={isHovered == index ? '': ''}>{term.termsAnswer}</p> 
                    </div>
                ))}
                </div>
                    <div className='termsOfUsePage-right'>
                        <img src={termsconditionsleft}></img> 
                    </div>
                </div>
                        
                        
            </div>        
        </div>
        
        
    )
}

export default TermsOfUsePage;