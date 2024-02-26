import React from 'react';
import '/src/LoginPage/LoginPage.css';
import { useNavigate } from 'react-router-dom';


function LoginPage() {

   let signUpPage = useNavigate();

   const toSignUp = () => {
    signUpPage('/signup')
   };

    return (
        <>

        <div>
            <h1 className='loginPage-title'>LOGIN/SIGN UP</h1>
        </div>

        <div className='loginPage-box'>
            <form className='loginPage-form' action=''>

                <div className='loginPage-enterForm'>
                    <label htmlFor='email'>EMAIL</label>
                    <input className='loginPage-input' 
                            type='email' 
                            placeholder='Enter Email' required></input>
                </div>

                <div className='loginPage-enterForm'>
                    <label htmlFor='password'>PASSWORD</label>
                    <input className='loginPage-input' 
                            type='password' 
                            placeholder='Enter Password' required></input>
                </div>

                <div className='loginPage-policy'>
                    <p>Account creation implies acceptance of our terms and policies</p>
                </div>

                <div className='loginPage-buttons'>
                    <button className='loginPage-button1' onClick={toSignUp}>CREATE AN ACCOUNT</button>
                    <button className='loginPage-button2'>LOGIN</button>
                </div>

            </form>
        </div>
        </>
    )
}

export default LoginPage;