import React from 'react';
import '/src/Software/DashboardWelcomePage/DasboardWelcomePage.css'
import { useState } from 'react';
import slimeLogo from '/slimeLogo.png'
import { useEffect } from 'react';

function DashboardWelcomePage() {

    useEffect(() => {

        document.body.style.backgroundColor = '#B9DCE1';
        
        return () => {
          document.body.style.backgroundColor = 'black'; 
        };
      }, []);

    return (
        <div className='dashboardWelcomePage-footer'>
            <h1 className="dasboardWelcomePage-title">WE are glad that you are with us</h1>

            <div className="dasboardWelcomePage-mainContent"> 
                <div className='dasboardWelcomePage-white-box'>
                    <div className="dasboardWelcomePage-box">
                        <h4>click here to 
                            complete your profile</h4>
                        <button>LETSGOOO</button>
                    </div>
                </div>

                <div className="dasboardWelcomePage-picture">
                    <img src={slimeLogo}></img>
                </div>
            </div>
        </div>
    )
}

export default DashboardWelcomePage;