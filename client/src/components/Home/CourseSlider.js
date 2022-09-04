import React from 'react';
import Slider from "react-slick";
import CourseBox from '../shared/CourseBox'

const CourseSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <div className="my-20 container mx-auto px-3">
            <div>
                <h1 class="text-4xl font-bold flex-auto my-5 text-red-700 text-center  ">Courses</h1>
            </div>
            <Slider {...settings}>
            <div>
                <CourseBox />
            </div>
            <div>
                <CourseBox />
            </div>
            <div>
                <CourseBox />
            </div>
            <div>
                <CourseBox />
            </div>
            </Slider>
        </div>
    );
    }

export default CourseSlider;