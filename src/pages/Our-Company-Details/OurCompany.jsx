import React from 'react';
import Navbar from '../Homev2/components/Navbar';
import Footer from '../Homev2/components/Footer';
import Form from '../../components/OurCompany/Form';

const OurCompany = () => {
    return (
        <>
            <Navbar isContactUs={true}/>
            <Form />
            <Footer isContactUs={true}/>
        </>
    );
};

export default OurCompany;
