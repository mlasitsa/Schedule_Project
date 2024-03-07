import { useState } from 'react'
import './App.css'
import NavBar from '/src/NavBar/NavBar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LoginPage from '/src/LoginPage/LoginPage'
import AboutUsPage from '/src/AboutUsPage/AboutUsPage'
import FeaturesPage from '/src/FeaturesPage/FeaturesPage'
import ContactUsPage from '/src/ContactUsPage/ContactUsPage'
import MainPage from '/src/MainPage/MainPage'
import PricingPage from '/src/PricingPage/PricingPage'
import FAQPage from '/src/FAQPage/FAQPage'
import FooterMenu from './FooterMenu/FooterMenu'
import TermsOfUsePage from './TermsOfUsePage/TermsOfUsePage'
import PrivacyPolicyPage from './PrivacyPolicyPage/PrivacyPolicyPage'
import CookiePolicyPage from './CookiePolicyPage/CookiePolicyPage'
import SignUpPage from './SignUpPage/SignUpPage'
import DashboardWelcomePage from './Software/DashboardWelcomePage/DasboardWelcomePage'
import axios from 'axios'
import { useEffect } from 'react'
import DashboardPlanningPage from './Software/DashboardPlanningPage/DashboardPlanningPage'
import DashboardProfilePage from './Software/DashboardProfilePage/DashboardProfilePage'
import DashboardSchedulePage from './Software/DashboardSchedulePage/DashboardSchedulePage'
import DashboardNotesPage from './Software/DashboardNotesPage/DashboardNotesPage'


function App() {

  const navigate = useNavigate();

  const toDashboardMainPage = () =>{
    navigate('/dashboard/welcome')
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
    <NavBar /> 
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/features' element={<FeaturesPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/about' element={<AboutUsPage />} />
      <Route path='/faq' element={<FAQPage />}/>
      <Route path='/contact' element={<ContactUsPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/termsnconditions' element={<TermsOfUsePage />} />
      <Route path='/privacypolicy' element={<PrivacyPolicyPage />} />
      <Route path='/cookiepolicy' element={<CookiePolicyPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/dashboard/welcome' element={<DashboardWelcomePage />} />
      <Route path='/dashboard/planning' element={<DashboardPlanningPage />} />
      <Route path='/dashboard/profile' element={<DashboardProfilePage />} />
      <Route path='/dashboard/schedule' element={<DashboardSchedulePage />} />
      <Route path='/dashboard/notes' element={<DashboardNotesPage />} />
    </Routes>

    <div className='footerMenu-margin'>
    <FooterMenu />
    </div>
    
    </div>
  )
}

export default App
