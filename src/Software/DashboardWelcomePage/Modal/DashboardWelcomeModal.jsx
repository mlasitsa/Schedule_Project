import React from 'react';
import '/src/Software/DashboardWelcomePage/Modal/DashboardWelcomeModal.css'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function DashboardWelcomeModal({show, onClose}) {

    const [degree, setDegree] = useState('');
    const [year, setYear] = useState('');
    const [major, setMajor] = useState('');
    const [minor, setMinor] = useState('');

    const degrees = [null,'Bachelors', 'Masters','Phd'];
    const years = [null,'1st Year', '2nd Year', '3rd Year', '4th Year'];
    const majors = [null,'Computer Science' , 'Nursing', 'Finance', 'Law']
    const minors = [null, 'None','Computer Science' , 'Nursing', 'Finance', 'Law'];
    

    if(!show) {
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const welcomeUserData = {
            degree: degree,
            year: year,
            major: major,
            minor: minor
        }

        // console.log(welcomeUserData)
        // onClose();
        axios.patch('http://localhost:3001/updateProfile', welcomeUserData, {
        withCredentials: true, // to send cookies, including the JWT token in this case
        headers: {
            'Content-Type': 'application/json'
            }
        })  
        .then(response => {
            console.log(response.data);
            onClose(); // Close the modal on success
        })
            .catch(error => {
            console.error('Error:', error.response ? error.response.data : error.message);
        });
    }

    return (
        <div className='dashboardWelcomeModal-box'>
            <form onSubmit={handleSubmit}>
            
            <div className='dashboardWelcomeModal-dropmenu'>
                
                <div className='dashboardWelcomeModal-label-select'>
                    
                    <label> 
                        Degree 
                    </label>

                    <select 
                        value={degree} 
                        onChange={(e) => setDegree(e.target.value)}
                        required>
                            {degrees.map((deg) => (
                            <option key={deg} value={deg}>{deg}</option>))}
                    </select>
                </div>

                 <div className='dashboardWelcomeModal-label-select'>           
                    <label>
                        Year
                    </label>

                    <select 
                        value={year} 
                        onChange={(e) => setYear(e.target.value)}
                        required>
                            {years.map((deg) => (
                            <option key={deg} value={deg}>{deg}</option>))}
                    </select>
                </div>

                <div className='dashboardWelcomeModal-label-select'>           
                    <label>
                        Major
                    </label> 

                    <select 
                        value={major} 
                        onChange={(e) => setMajor(e.target.value)}
                        required>
                            {majors.map((deg) => (
                            <option key={deg} value={deg}>{deg}</option>))}
                    </select>
                </div>

                <div className='dashboardWelcomeModal-label-select'>
                    <label>
                        Minor
                    </label>

                    <select 
                        value={minor} 
                        onChange={(e) => setMinor(e.target.value)}
                        required>
                            {minors.map((deg) => (
                            <option key={deg} value={deg}>{deg}</option>))}
                    </select>
                </div>  
            </div>
            

            <div className='dashboardWelcomeModal-buttons'>
                <button className='button1' onClick={onClose}>BACK</button>
                <button className='button2'>SUBMIT</button>
            </div>
            </form>
        </div>
    )
}

export default DashboardWelcomeModal;