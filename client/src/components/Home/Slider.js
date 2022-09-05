import React from "react";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import Slider from "react-slick";

function OurAdvisor() {
  const images = [
    {
      imageurl: "https://i.ibb.co/nw8Y311/slider-1.jpg",
    },
    {
      imageurl: "https://i.ibb.co/mBXFJh3/slider-2.jpg",
    },
  ];
  const [imagesShownArray, setImagesShownArray] = useState(
    Array(images.length).fill(false)
  );

  const imageVisibleChange = (index, isVisible) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
};
  return (
    <div className="mb-20">
        <Slider {...settings}>
          {images &&
            images.map((advisor) => (
              <VisibilitySensor>
                <GridGalleryCard
                  imageUrl={advisor.imageurl}
                />
              </VisibilitySensor>
            ))}
        </Slider>
    </div>
  );
}

function GridGalleryCard({imageUrl}) {
  
  return (
    <div>
      <img src={imageUrl} alt="banner" className="w-full" />
    </div>
  );
}

export default OurAdvisor;
