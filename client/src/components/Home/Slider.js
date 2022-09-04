import React from 'react';
import Slider from "react-slick";
import slider1 from '../../assets/slider-1.jpg';
import slider2 from '../../assets/slider-2.jpg';

const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="my-20">
            <Slider {...settings}>
            <div>
                <img src={slider1} alt="Logo" />
            </div>
            <div>
                <img src={slider2} alt="Logo" />
            </div>
            </Slider>
        </div>
    );
    }

export default SimpleSlider;