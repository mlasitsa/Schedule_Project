import React from 'react';
import '/src/FAQPage/FAQPage.css';
import { FAQData } from '../FAQData';
import { useState } from 'react';

function FAQPage() {

    const [isClicked, setIsClicked] = useState(false);

    const openAnswers = () => {
        setIsClicked(!isClicked);
      };

      const definedTitle = (index) => {
        if (isClicked == index) {
            return setIsClicked(false);
        }

        setIsClicked(index);
    }

    return (
        <div>
            <h1 className='faqpage-header'>FAQ</h1>

            <div className='wrapper'>
                <div className='accordion'>
                    {FAQData.map((item, index) => (
                        <div className='faqpage-item' onClick={() => definedTitle(index) }>
                            <div className='faqpage-title'>
                                <h2>{item.question}</h2>
                                <span onClick={openAnswers} className='faqpage-dot'>+</span>
                            </div>




                            <div className={isClicked ? 'faqpage-content' : ''}>
                                <p clas>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQPage;


/* STILL WORKING ON IT */