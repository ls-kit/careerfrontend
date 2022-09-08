import React from 'react';
import RegistrationForm from '../components/Register/RegistrationForm';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import TopHeader from '../components/shared/TopHeader';

const Registation = () => {
    return (
      <div>
        <TopHeader />
        <Header />
        <RegistrationForm />
        <Footer />
      </div>
    );
};

export default Registation;