import React from 'react';
import Banner from '../components/Home/Banner';
import CountUp from '../components/Home/CountUp';
import OurAdvisor from '../components/Home/OurAdvisor';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <CountUp />
            <OurAdvisor/>
            <Footer />
        </div>
    );
};

export default Home;