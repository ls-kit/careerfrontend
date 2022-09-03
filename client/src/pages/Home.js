import React from 'react';
import Aboutsection from '../components/Home/Aboutsection';
import Banner from '../components/Home/Banner';
import CountDown from '../components/Home/CountDown';
import OurAdvisor from '../components/Home/OurAdvisor';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import TopHeader from '../components/shared/TopHeader';

const Home = () => {
    return (
        <div>
            <TopHeader />
            <Header />
            <Banner />

             {/* <CountDown /> */}
            {/* <CountUp />  */}
           <Aboutsection/>
            <OurAdvisor/>
            <Footer />
        </div>
    );
};

export default Home;