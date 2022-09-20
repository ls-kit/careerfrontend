import React from 'react';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import TopHeader from '../components/shared/TopHeader';
import OurPartner from '../components/shared/OurPartner';
import OraganizerTitle from '../components/Organizer/OrganizerTitle';
import OrganizerBox from '../components/Organizer/OraganizerBox';

const Oraganizer = () => {
    return (
        <div>
            <TopHeader />
            <Header />
            <OraganizerTitle />
            <OrganizerBox />
            <OurPartner />
            <Footer />
        </div>
    );
};

export default Oraganizer;