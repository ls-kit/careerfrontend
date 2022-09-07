import React from 'react';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import TopHeader from '../components/shared/TopHeader';
import CountDown from "../components/Home/CountDown";
import AboutSection from '../components/AboutBco/AboutSection';
import OurPartner from '../components/AboutBco/OurPartner';

const AboutBco = () => {
    return (
        <div>
            <TopHeader />
            <Header />
            <AboutSection />
            <CountDown/>
            <OurPartner />
            <Footer />
        </div>
    );
};

export default AboutBco;