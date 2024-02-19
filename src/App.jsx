import { useState } from 'react'
import './App.css'
import NavBar from '/src/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
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

function App() {

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
    </Routes>

    <div className='footerMenu-margin'>
    <FooterMenu />
    </div>
    
    </div>
  )
}

export default App
