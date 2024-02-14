import React from 'react';
import '/src/ContactUsPage/ContactUsPage.css';

function ContactUsPage() {
    return (
        <div className='contactPage'>
            <h1>CONTACT US</h1>

            <p className='title'> We're here to support you every step of the way. 
                Whether you have questions, feedback, or need assistance, our team is eager to help. 
                Please feel free to reach out to us through the following channels
            </p>

            <button className='button123'>Email: support@schedule.io</button>
            <button className='button123'>Phone: (123) 456-7890 (Monday - Friday, 9 AM - 5 PM)</button>
            <button className='button123'>Check our FAQ page</button>

            <button className='formButton'>Contact Form: Fill out your details below, 
                and we'll get back to you as soon as possible
                </button>
        </div>
    )
}

export default ContactUsPage;