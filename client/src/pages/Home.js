import React from 'react';
import Banner from '../components/Home/Banner';
import CountDown from '../components/Home/CountDown';
import CountUp from '../components/Home/CountUp';
import Partner from '../components/Home/Partner';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import TopHeader from '../components/shared/TopHeader';

const Home = () => {
    return (
        <div>
            <TopHeader />
            <Header />
            <Banner />
            <CountDown />
            <CountUp />
            <Partner />
            <Footer />
        </div>
    );
};

export default Home;