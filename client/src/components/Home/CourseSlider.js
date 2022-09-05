import React from 'react';
import Slider from "react-slick";
import VisibilitySensor from "react-visibility-sensor";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

function CourseSlider() {
    const olympiad = [
      {
        Name: "LEADERSHIP SKILL DEVELOPMENT",
      },
      {
        Name: "MANAGEMENT SKILL DEVELOPMENT",
      },
      {
        Name: "MANAGEMENT SKILL DEVELOPMENT",
      },
      {
        Name: "COMMUNICATION SKILL DEVELOPMENT",
      },
    ];

    const hello = { color: "white", fontSize: "1.5em" }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <BsFillArrowRightCircleFill/>,
        prevArrow: <BsFillArrowLeftCircleFill/>,
    };
    
    return (
      <div className="container mx-auto px-3 py-8">
        <div>
            <h2 class="text-3xl font-semibold flex-auto my-5 text-red-600 text-center  ">Courses</h2>
        </div>
        <Slider {...settings}>
            {olympiad &&
            olympiad.map((olympiad) => (
            <VisibilitySensor>
                <OlympiadCard 
                name={olympiad.Name}
                />
            </VisibilitySensor>
            ))}
        </Slider>
      </div>
    );
}

function OlympiadCard({name}) {
  
    return (
        <div className="border-4 border-rose-600 text-center p-10 m-4">
            <h2 className="font-bold text-3xl text-fuchsia-600">
               {name}
            </h2>
        </div>
    );
  }

export default CourseSlider;