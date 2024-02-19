import React from 'react';
import '/src/FAQPage/FAQPage.css';
import { FAQData } from './FAQData';
import { useState } from 'react';

function FAQPage() {

    const [isClicked, setIsClicked] = useState(null);

      const definedTitle = (index) => {
        if (isClicked == index) {
            return setIsClicked(null);
        }

        setIsClicked(index);
    }

    return (
        <div>
            <h1 className='faqpage-header'>FAQ</h1>
            <p className='faqpage-aricle'>Here, we've compiled a list of frequently asked questions to help you navigate and make the most out of our platform. Whether you're a student, professor, or administrator, our goal is to ensure you have all the information you need for a seamless academic planning experience. If you have questions not covered here, please don't hesitate to contact us.</p>
        <div className='faqpage-container'>
            <div className='faqpage-wrapper'>
                <div className='faqpage-accordion'>
                    {FAQData.map((item, index) => (
                        <div className='faqpage-item' onClick={() => definedTitle(index) }>
                            <div className='faqpage-title'>
                                <h2 className='faqpage-question'>{item.question}</h2>
                                <span className={isClicked == index ? 'faqpage-dot-active' : 'faqpage-dot'}>{isClicked == index ? '-' : '+'}</span>
                            </div>
                            <div className={isClicked == index ? 'faqpage-content-show' : 'faqpage-content'}>
                                <p clas>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    )
}

export default FAQPage;

/* STILL WORKING ON IT */