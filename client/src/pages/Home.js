import React from 'react';
import Aboutsection from '../components/Home/Aboutsection';
import Banner from '../components/Home/Banner';
import OurAdvisor from '../components/Home/OurAdvisor';
import SimpleSlider from '../components/Home/Slider';
import CourseSlider from '../components/Home/CourseSlider';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import TopHeader from '../components/shared/TopHeader';
import OlympiadSegment from '../components/Home/OlympiadSegment';
import OlympiadRound from '../components/Home/OlympiadRound.js';
import OlympiadCategories from '../components/Home/OlympiadCategories';

const Home = () => {
    return (
        <div>
            <TopHeader />
            <Header />
            <Banner />
            <Aboutsection/>
            <OlympiadCategories />
            <OlympiadSegment />
            <OlympiadRound />
            <CourseSlider />
            <SimpleSlider />
            <OurAdvisor/>
            <Footer />
        </div>
    );
};

export default Home;