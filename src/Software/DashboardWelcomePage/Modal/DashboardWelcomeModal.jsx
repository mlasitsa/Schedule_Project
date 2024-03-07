import React from 'react';
import '/src/Software/DashboardWelcomePage/Modal/DashboardWelcomeModal.css'
import { useEffect } from 'react';
import { useState } from 'react';

function DashboardWelcomeModal({show, onClose}) {

    const [degree, setDegree] = useState('');
    const [year, setYear] = useState('');
    const [major, setMajor] = useState('');
    const [minor, setMinor] = useState('');

    const degrees = ['Bachelors', 'Masters','Phd'];
    const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
    const majors = ['Computer Science' , 'Nursing', 'Finance', 'Law']
    const minors = ['Computer Science' , 'Nursing', 'Finance', 'Law'];
    

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

        console.log(welcomeUserData)
        onClose();
    }

    return (
        <div className='dashboardWelcomeModal-box'>
            <form onSubmit={handleSubmit}>
                <label>
                    Degree
                        <select 
                        value={degree} 
                        onChange={(e) => setDegree(e.target.value)}
                        required>
                            {degrees.map((deg) => (
                            <option key={deg} value={deg}>{deg}</option>))}
                        </select>
                </label> 
                <label>
                    Year
                        <select 
                        value={year} 
                        onChange={(e) => setYear(e.target.value)}
                        required>
                            {years.map((deg) => (
                            <option key={deg} value={deg}>{deg}</option>))}
                        </select>
                </label> 
                <label>
                    Major
                        <select 
                        value={major} 
                        onChange={(e) => setMajor(e.target.value)}
                        required>
                            {majors.map((deg) => (
                            <option key={deg} value={deg}>{deg}</option>))}
                        </select>
                </label> 
                <label>
                    Minor
                        <select 
                        value={minor} 
                        onChange={(e) => setMinor(e.target.value)}
                        required>
                            {minors.map((deg) => (
                            <option key={deg} value={deg}>{deg}</option>))}
                        </select>
                </label> 
            </form>
        </div>
    )
}

export default DashboardWelcomeModal;