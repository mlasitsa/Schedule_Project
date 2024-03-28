import React, { useEffect } from "react";
import mainPageLogo from '/mainPageLogo.png';
import '/src/MainPage/MainPage.css';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FeaturesPage from '/src/FeaturesPage/FeaturesPage';
import AboutUsPage from '/src/AboutUsPage/AboutUsPage';
import FAQPage from '/src/FAQPage/FAQPage';
import ContactUsPage from '/src/ContactUsPage/ContactUsPage';
import SignUpPage from '/src/SignUpPage/SignUpPage';

function MainPage() {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toLogIn = () => {
      navigate('/login');
  };

  const toSignUp = () => {
      navigate('/signup');
  };

  const animationProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay: 0.5, duration: 0.5 }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1 className="title">WELCOME TO SCHEDULE.IO</h1>

      <div className="middleDisc">
        <motion.img
          className='mainGuy'
          src={mainPageLogo}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        />

        <motion.p
          className="description"
          {...animationProps} 
        >
          Our software is an innovative academic planning
              tool designed to simplify and optimize the educational
              experience for students, professors, and administrators. 
              It facilitates seamless course scheduling, efficient student 
              enrollment, and real-time tracking of academic progress. 
              With a user-friendly interface, our platform enhances the 
              way educational institutions manage operations, fostering 
              a more connected and accessible learning environment.
        </motion.p>
      </div>

      <div className="buttons">
        <button className="loginBtn" onClick={toLogIn}>LOGIN</button>
        <button className="signUpBtn" onClick={toSignUp}>SIGN UP</button>
      </div>
      
      <motion.div className="featuresPage" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <motion.div {...animationProps}><FeaturesPage /></motion.div>
        <motion.div {...animationProps}><AboutUsPage /></motion.div>
        <motion.div {...animationProps}><FAQPage /></motion.div>
        <motion.div {...animationProps}><ContactUsPage /></motion.div>
        <motion.div {...animationProps}><SignUpPage /></motion.div>
      </motion.div>
    </motion.div>
  );
}

export default MainPage;