import React from 'react';
import '/src/Software/DashboardWelcomePage/DasboardWelcomePage.css'
import { useState } from 'react';
import slimeLogo from '/slimeLogo.png'
import { useEffect } from 'react';
import DashboardWelcomeModal from '/src/Software/DashboardWelcomePage/Modal/DashboardWelcomeModal.jsx'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DashboardWelcomePage() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profileComplete, setProfileComplete] = useState(false);
    const location = useNavigate();

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const goToProfile = () => {
        location('/dashboard/profile')
    }
    

    useEffect(() => {

        document.body.style.backgroundColor = '#B9DCE1';
        
        axios.get('http://localhost:3001/getStudentInfo', {withCredentials: true})
        .then(response => {
            const {degree, year, major,minor} = response.data;
            if (degree && year && major && minor) {
                setProfileComplete(true);
            }
        })

        return () => {
          document.body.style.backgroundColor = 'black'; 
        };
      }, []);

    return (
        <div className='dashboardWelcomePage-footer'>
            <h1 className="dasboardWelcomePage-title">WE are glad that you are with us</h1>

            <div className="dasboardWelcomePage-mainContent"> 
            {profileComplete ? 

                <div className="dasboardWelcomePage-box">
                    <h4>Welcome back! Go to your profile</h4>
                    <button onClick={goToProfile}>LETSGOOO</button>
                </div>
              
            :   <div className={isModalOpen ? 'dasboardWelcomePage-box-unactive' : 'dasboardWelcomePage-white-box'}>
                    <div className="dasboardWelcomePage-box">
                        <h4>click here to 
                            complete your profile</h4>
                        <button onClick={openModal}>LETSGOOO</button>
                    </div>
                </div>
            }
                <DashboardWelcomeModal show={isModalOpen} onClose={closeModal}/>

                <div className="dasboardWelcomePage-picture">
                    <img src={slimeLogo}></img>
                </div>
            </div>
        </div>
    )
}

export default DashboardWelcomePage;