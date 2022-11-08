import React from 'react';
import OurTeamsCat from '../components/OurTeams/OurTeamsCat';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import HeaderShapeTitle from '../components/shared/HeaderShapeTitle';
import TopHeader from '../components/shared/TopHeader';

const OurTeams = () => {
    return (
        <div>
            <TopHeader />
            <Header />
            <HeaderShapeTitle />
            <OurTeamsCat />
            <Footer />
        </div>
    );
};

export default OurTeams;