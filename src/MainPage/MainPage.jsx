import React, { useEffect } from "react";
import mainPageLogo from '/mainPageLogo.png';
import '/src/MainPage/MainPage.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MainPage() {

  const loginPage = useNavigate();
  const signUpPage = useNavigate();
  const dashboardMainPage = useNavigate();

  const toLogIn = () => {
      loginPage('/login');
  };

  const toSignUp = () => {
    signUpPage('/signup')
  }

  const toDashboardMainPage = () =>{
    dashboardMainPage('/dashboard/welcome')
  }

  axios.defaults.withCredentials = true;
    useEffect(() => {
      axios.get('http://localhost:3001/')
      .then(result => {console.log(result)
        if (result.data === "Success") {
        toDashboardMainPage();
        }
      })
      .catch(err => console.log(err))
    }, []) // MOST LIKELY NEED TO USE IT IN MY APP.JSX



    return (
      <div>

        <h1 className="title">WELCOME TO SCHEDULE.IO</h1>

        <div className="middleDisc">
          
          <img className='mainGuy' src={mainPageLogo}></img>

          <p className="description">Our software is an innovative academic planning
              tool designed to simplify and optimize the educational
              experience for students, professors, and administrators. 
              It facilitates seamless course scheduling, efficient student 
              enrollment, and real-time tracking of academic progress. 
              With a user-friendly interface, our platform enhances the 
              way educational institutions manage operations, fostering 
              a more connected and accessible learning environment.</p>
        </div>

        <div className="buttons">
          <button className="loginBtn" onClick={toLogIn}>LOGIN</button>
          <button className="signUpBtn" onClick={toSignUp}>SIGN UP</button>
        </div>
        </div>
      
    )
  }
  
  export default MainPage;