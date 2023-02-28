import React from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './style.css'
import {Helmet} from 'react-helmet-async'
export default function Privacy() {
  return (
    <div>
      <>
      <Helmet>
    <title>Privacy policy</title>
    <meta name="description" content="Our privacy policy outlines how we collect, use, and protect your personal information when you use our website."/>
    <link rel="canonical" href="/privacy-policy" />
    </Helmet>
        <Navbar/>
        <Home/>
        <Footer/>
        </>
    </div>
  )
}
