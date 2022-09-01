import React from "react";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

function OurAdvisor() {
  const images = [
    {
      Name: "Gazi Mizanur Rahman",
      imageurl:
        "https://i.ibb.co/nL7d3t8/154843485-277315673763762-4421412219706747506-n.jpg",
      Details: "Founder, BCO",
    },
    {
      Name: "Gazi Mizanur Rahman",
      imageurl:
        "https://i.ibb.co/nL7d3t8/154843485-277315673763762-4421412219706747506-n.jpg",
      Details: "Founder, BCO",
    },
    {
      Name: "Gazi Mizanur Rahman",
      imageurl:
        "https://i.ibb.co/nL7d3t8/154843485-277315673763762-4421412219706747506-n.jpg",
      Details: "Founder, BCO",
    },
    {
      Name: "Gazi Mizanur Rahman",
      imageurl:
        "https://i.ibb.co/nL7d3t8/154843485-277315673763762-4421412219706747506-n.jpg",
      Details: "Founder, BCO",
    },
    {
      Name: "Gazi Mizanur Rahman",
      imageurl:
        "https://i.ibb.co/nL7d3t8/154843485-277315673763762-4421412219706747506-n.jpg",
      Details: "Founder, BCO",
    },
    {
      Name: "Gazi Mizanur Rahman",
      imageurl:
        "https://i.ibb.co/nL7d3t8/154843485-277315673763762-4421412219706747506-n.jpg",
      Details: "Founder, BCO",
    },
    {
      Name: "Gazi Mizanur Rahman",
      imageurl:
        "https://i.ibb.co/nL7d3t8/154843485-277315673763762-4421412219706747506-n.jpg",
      Details: "Founder, BCO",
    },
    {
      Name: "Gazi Mizanur Rahman",
      imageurl:
        "https://i.ibb.co/nL7d3t8/154843485-277315673763762-4421412219706747506-n.jpg",
      Details: "Founder, BCO",
    },
    {
      Name: "Gazi Mizanur Rahman",
      imageurl:
        "https://i.ibb.co/nL7d3t8/154843485-277315673763762-4421412219706747506-n.jpg",
      Details: "Founder, BCO",
    },
    {
      Name: "Gazi Mizanur Rahman",
      imageurl:
        "https://i.ibb.co/nL7d3t8/154843485-277315673763762-4421412219706747506-n.jpg",
      Details: "Founder, BCO",
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

  return (
    <div className="grid grid-cols-5 gap-2 ">
      {images &&
        images.map((advisor, index) => (
          <VisibilitySensor
            key={index}
            partialVisibility={true}
            offset={{ bottom: 80 }}
            onChange={(isVisible) => imageVisibleChange(index, isVisible)}
          >
            <GridGalleryCard
              className="rounded-sm	"
              imageUrl={advisor.imageurl}
              show={imagesShownArray[index]}
            />
          </VisibilitySensor>
        ))}
    </div>
  );
}

function GridGalleryCard({ imageUrl, show }) {
  return (
    <div
      className={`relative transition rounded-sm	 ease-in duration-300 transform ${
        show ? "" : "translate-y-16 opacity-0"
      }`}
    >
      <div className="absolute inset-0 z-10 rounded-sm	 flex transition duration-400 ease-in ">
        <div className="absolute inset-0 bg-black flex opacity-0  hover:opacity-70">
          <div className="mx-auto  text-white z-10 self-center uppercase tracking-widest text-sm ">
            Hello World
          </div>
        </div>
      </div>
      <img src={imageUrl} alt="" />
    </div>
  );
}

export default OurAdvisor;
