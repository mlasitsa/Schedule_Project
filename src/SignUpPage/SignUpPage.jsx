import React from 'react';
import '/src/SignUpPage/SignUpPage.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import googleSignUpLogo from '/googleSignUpLogo.png';
import axios from 'axios'

function SignUpPage() {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const loginPage = useNavigate();

    const toLogIn = () => {
        loginPage('/login');
    };

    const handleSubmit = (el) => {
        el.preventDefault();

        if (password !== confirmPassword) {
            setPasswordError('Password does not match');
            return;
        }

        setPasswordError('');
        toLogIn();

        /*
        axios.post('http://localhost:3308/signup', values)
        .then(toLogIn())
        .catch(err => console.log(err))
        */
    }


    return (
        <>
        
        <div>
            <h1 className='signUpPage-title'>SIGN UP</h1>
            <h4 className='signUpPage-description'>LETS CREATE AN ACCOUNT</h4>
        </div>

    <div className='signUpPage-middle'>
        <div className='signUpPage-box'>
            <form className='signUpPage-form' onSubmit={handleSubmit} action=''>

            {passwordError && <div className='signUpPage-error'>{passwordError}</div>}

                <div className='signUpPage-enterForm'>
                    <label htmlFor='name'>FULL NAME</label>
                    <input className='signUpPage-input' 
                            type='text' 
                            pattern="[A-Za-z ]+" 
                            title="Only letters and spaces are allowed" 
                            placeholder='Enter Name' 
                            required
                            value={fullName}
                            onChange={(el) => setFullName(el.target.value)}>    
                    </input>
                </div>

                <div className='signUpPage-enterForm'>
                    <label htmlFor='email'>EMAIL</label>
                    <input className='signUpPage-input' 
                            type='email'   
                            placeholder='Enter Email' 
                            required
                            value={email}
                            onChange={(el) => setEmail(el.target.value)}>
                    </input>
                </div>

                <div className='signUpPage-enterForm'>
                    <label htmlFor='password'>PASSWORD</label>
                    <input className='signUpPage-input' 
                            type='password' 
                            placeholder='Enter Password' 
                            required
                            value={password}
                            onChange={(el) => setPassword(el.target.value)}>
                    </input>
                </div>

                <div className='signUpPage-enterForm'>
                    <label htmlFor='password'>CONFIRM PASSWORD</label>
                    <input className='signUpPage-input' 
                            type='password' 
                            placeholder='Confirm your Password' 
                            required
                            value={confirmPassword}
                            onChange={(el) => setConfirmPassword(el.target.value)}></input>
                </div>


                <div className='signUpPage-buttons'>
                    <button className='signUpPage-button1' onClick={toLogIn}>Back to login</button>
                    <button type="submit" className='signUpPage-button2'>SIGN UP</button>
                </div>

                

            </form>
        </div>

        <div className='signUpPage-text'>
            <div className='signUpPage-password-text'>
                <h4>Your password must:</h4>
                <p>Match</p>
                <p>Have Minimum 8 characters</p>
                <p>Have at least one uppercase letter</p>
                <p>Have at least one lowercase letter</p>
                <p>Include at least one number</p>
                <p>Include at least one special character (e.g., !, @, #)</p>
            </div>

            <div className='signUpPage-google-text'>
                <h4>You can also sign up using</h4>
                <img src={googleSignUpLogo}></img>
            </div>
        </div>
    </div>
        </>
    )
}

export default SignUpPage;