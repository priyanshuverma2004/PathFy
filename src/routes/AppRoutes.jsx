import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

import Nav from '../components/Navbar'
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Packages from "../pages/Packages";
import Gallery from "../pages/Gallery";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import ScrollToTop from '../components/ScrollToTop';


import TermsAndConditionsPage from '../pages/TermsAndConditon';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';



import PackageDetailPage from '../pages/PackageDetailPage';

const AppRoutes = () => {
  return (
    <Router>
      
    <div className='flex flex-col min-h-screen'>
      
      <Nav/>
      <main className='flex-grow'>
        <ScrollToTop smooth={false}/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/packages" element={<Packages />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />


         {/*// terms and condition and privacy policy route*/ } 

         <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
         <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

        
      <Route path="/packages/:slug" element={<PackageDetailPage />} />
          

          <Route path='*'
          element={
             <div className="flex flex-col items-center justify-center py-20">
                  <h1 className="text-4xl font-bold text-red-500 mb-4">
                    404 - Page Not Found
                  </h1>
                  <p className="text-gray-600">
                    Oops! The page you’re looking for doesn’t exist.
                  </p>
                </div>
          }
          />
        </Routes>

      </main>

      <Footer/>

    </div>
    </Router>
  )
}

export default AppRoutes