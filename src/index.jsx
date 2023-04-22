import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Thankyou from './pages/thankyou/Thankyou';
import Privacy from './pages/privacy/Privacy';
import Form from './pages/form/Form';
import Projects from './pages/Projects/Projects';
import Homev2 from './pages/Homev2';
import ContactUs from './pages/ContactUs/ContactUs';
import Blog from './pages/Blog/Blog';
import EventSignup from './pages/EventSignup/EventSignup';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC4E0q-7NLTfd3p9boFNDobDG3YN9iChMQ',
  authDomain: 'matrix-labs-main.firebaseapp.com',
  projectId: 'matrix-labs-main',
  storageBucket: 'matrix-labs-main.appspot.com',
  messagingSenderId: '714045750698',
  appId: '1:714045750698:web:6031cab5f8878a4bad7fd3',
  measurementId: 'G-3Q9V688SSV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/homev2" element={<App />} />
          <Route exact path="/" element={<Homev2 />} />
          <Route exact path="/thankyou" element={<Thankyou />} />
          <Route exact path="/privacy-policy" element={<Privacy />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/blog/:title" element={<Blog />} />
          <Route exact path="/eventsignup" element={<EventSignup />} />
        </Routes>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
