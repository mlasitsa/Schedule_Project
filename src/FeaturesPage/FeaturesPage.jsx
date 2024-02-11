import React from 'react';
import '/src/FeaturesPage/FeaturesPage.css';
import student from '/Student.png';
import computer from '/Computer.png';
import trophy from '/trophy.png';

function FeaturesPage() {
    return (
        <div>
            <h1 className='title'>FEATURES</h1>

            <div className='boxes-layout'>

                <div className='box'>
                    <img className='student' src={student}></img>
                    <p className='description'>STUDENT ENROLLMENT MANAGEMENT</p>
                    <p>SIMPLIFIES THE PROCESS OF ENROLLING IN COURSES, ALLOWING
                       STUDENTS TO VIEW AVALIABLE CLASSES, TRACK THEIR PROGRESS,
                       AND MANAGE THEIR ACADEMIC JOURNEY WITH EASE
                    </p>
                </div>

                <div className='box'>
                    <img className='computer' src={computer}></img>
                    <p className='description'>COURSE SCHEDULING</p>
                    <p>OFFERS A DRAG-AND-DROP INTERFACE TO EASILY PLAN AND 
                       MANAGE ACADEMIC SCHEDULES, OPTIMIZING CLASS TIMES
                       AND LOCATIONS TO FIT STUDENTS' NEEDS
                    </p>
                </div>

                <div className='box'>
                    <img className='trophy' src={trophy}></img>
                    <p className='description'>ACADEMIC PROGRESS TRACKING</p>
                    <p>PROVIDES REAL-TIME INSIGHTS INTO STUDENTS' ACADEMIC
                       ACHIEVEMENTS, HIGHLIGHTING MILESTONES AND AREAS FOR
                       IMPROVEMENT TO ENSURE SUCCESSFUL PROGRAM COMPLETION
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FeaturesPage;