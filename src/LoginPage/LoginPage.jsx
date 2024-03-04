import React from 'react';
import '/src/LoginPage/LoginPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';



function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   let signUpPage = useNavigate(); // CHANGE TO ONE LOCATION 
   let toHome = useNavigate(); // CHANGE TO ONE LOCATION 

   axios.defaults.withCredentials = true;
   
   const goToHome = () => {
    toHome('/dashboard/welcome')
   }

   const toSignUp = () => {
    signUpPage('/signup')
   };  

   const handleSubmit = (el) => {
    el.preventDefault();
    axios.post('http://localhost:3001/login', {email, password})
    .then(response => {
        console.log(response)
        if(response.data  === "Success") {
            goToHome();
        }
        
    })
    .catch(err => console.log(err)) 

   }

    return (
        <>

        <div>
            <h1 className='loginPage-title'>LOGIN/SIGN UP</h1>
        </div>

        <div className='loginPage-box'>
            <form className='loginPage-form' action='' onSubmit={handleSubmit}>

                <div className='loginPage-enterForm'>
                    <label htmlFor='email'>EMAIL</label>
                    <input className='loginPage-input' 
                            type='email' 
                            placeholder='Enter Email' 
                            required
                            value={email}
                            onChange={(el) => setEmail(el.target.value)}>
                                
                            </input>
                            
                </div>

                <div className='loginPage-enterForm'>
                    <label htmlFor='password'>PASSWORD</label>
                    <input className='loginPage-input' 
                            type='password' 
                            placeholder='Enter Password' 
                            required
                            value={password}
                            onChange={(el) => setPassword(el.target.value)}></input>
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