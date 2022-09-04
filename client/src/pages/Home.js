import React from 'react';
import Aboutsection from '../components/Home/Aboutsection';
import Banner from '../components/Home/Banner';
import OurAdvisor from '../components/Home/OurAdvisor';
import SimpleSlider from '../components/Home/Slider';
import CourseSlider from '../components/Home/CourseSlider';
import OlympiadSection from '../components/Home/OlympiadSection';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import TopHeader from '../components/shared/TopHeader';
import OlympiadBox from '../components/shared/OlympiadBox';

const Home = () => {
    return (
        <div>
            <TopHeader />
            <Header />
            <Banner />

             {/* <CountDown /> */}
            {/* <CountUp />  */}
           <Aboutsection/>
           <OlympiadSection />
            <CourseSlider />
            <SimpleSlider />
            <OurAdvisor/>
            <Footer />
        </div>
    );
};

export default Home;