import React from "react";
import mainPageLogo from '/mainPageLogo.png';
import '/src/MainPage/MainPage.css';

function MainPage() {

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
          <button className="loginBtn">LOGIN</button>
          <button className="signUpBtn">SIGN UP</button>
        </div>
        </div>
      
    )
  }
  
  export default MainPage;