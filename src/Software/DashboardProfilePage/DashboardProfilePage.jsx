import React from 'react';
import '/src/Software/DashboardProfilePage/DashboardProfilePage.css'
import { useState } from 'react';
import { useEffect } from 'react';
import DashboardWelcomeModal from '../DashboardWelcomePage/Modal/DashboardWelcomeModal';
import axios from 'axios';
import studentPic from '/studentPic.png'

function DashboardProfilePage() {
    const [userInfo, setUserInfo] = useState({ degree: '', year: '', major: '', minor: '' });
    const [popUp, setPopUp] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
  

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }
    
    useEffect(() => {
      
        const fetchUserInfo = async () => {
        try {
          const response = await axios.get('http://localhost:3001/getStudentInfo', { withCredentials: true });
          const { degree, year, major, minor } = response.data;
  
          if (degree && year && major && minor) {
            setUserInfo({ degree, year, major, minor });
          } else {
            setPopUp(true);
          }
        } catch (error) {
          console.error('Failed to fetch user info:', error);
          setPopUp(true);
        }
      };
  
      fetchUserInfo();
    }, []);

    useEffect(() => {

        document.body.style.backgroundColor = '#B9DCE1';
        
        return () => {
          document.body.style.backgroundColor = 'black'; 
        };
      }, []);

    return (
        <>
            <h1 className="dasboardProfilePage-title">Profile</h1>
            <h4 className='dasboardWelcomePage-description'>we are glad that you are with us! You are on the right track and we a are proud of you
                on this page you can check your information as well as update if you 
                changed your mind. Here you can also access any links you need 
                and track your performance  </h4>

            <div className='dasboardProfilePage-mainContent'>
                <img className='dasboardProfilePage-image' src={studentPic}></img>

            {(!popUp) ? 
                <div className={isModalOpen ? 'dasboardProfilePage-info-unactive' : 'dasboardProfilePage-info'}>
                    <div className='dasboardProfilePage-info-row'> 
                        <h4>
                            Degree
                        </h4>

                        <div className='dasboardProfilePage-rectangle'>
                            <p>
                                {userInfo.degree}
                            </p>
                        </div>
                    </div>

                    <div className='dasboardProfilePage-info-row'> 
                        <h4>
                            Year
                         </h4>

                        <div className='dasboardProfilePage-rectangle'>
                            <p>
                                {userInfo.year}
                            </p>
                        </div>
                    </div>

                    <div className='dasboardProfilePage-info-row'> 
                        <h4>
                            Major
                        </h4>

                        <div className='dasboardProfilePage-rectangle'>
                            <p>
                                {userInfo.major}
                            </p>
                        </div>
                    </div>

                    <div className='dasboardProfilePage-info-row'> 
                        <h4>
                            Minor
                        </h4>

                        <div className='dasboardProfilePage-rectangle'>
                            <p>
                                {userInfo.minor}
                            </p>
                        </div>
                    </div>

                    <button className='dasboardProfilePage-button' onClick={openModal}>CHANGE</button>
                </div>
                
                : 
                <div className={isModalOpen ? 'dasboardProfilePage-error-unactive': 'dasboardProfilePage-error'}>
                    <h4>OOOPS</h4>
                    <p>looks like you dont have this information please use button below 
                        to complete your profile</p>
                    <button className='dasboardProfilePage-button' onClick={openModal}>COMPLETE</button>
                </div>} 

                <DashboardWelcomeModal show={isModalOpen} onClose={closeModal}/>
            
            </div>
        </>
    )
}

export default DashboardProfilePage;