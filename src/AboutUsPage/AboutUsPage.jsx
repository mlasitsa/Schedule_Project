import React from 'react';
import aboutUsPic from '/aboutUsPic.png'
import '/src/AboutUsPage/AboutUsPage.css';

function AboutUsPage() {
    return (
        <div className='aboutUsPage'>
            <h1 className='title'>ABOUT US</h1>

            <div className='content'>
                <p className='box-description'>At Schedule.io, we're dedicated to revolutionizing how educational 
                    institutions plan and manage their academic schedules. Our platform 
                    is designed to simplify complex scheduling tasks, offering intuitive 
                    tools for course scheduling, student enrollment, and academic 
                    progress tracking. Our mission is to empower students, professors, 
                    and administrators with technology that enhances the educational 
                    experience, making it more accessible, efficient, and enjoyable for all. 
                    Join us on our journey to streamline academic planning and unlock 
                    the full potential of every educational journey.</p>

                <img className='guy-stairs' src={aboutUsPic}></img>
            </div>

        </div>
    )
}

export default AboutUsPage;