import React from "react";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import advisor from "../../assets/HomBackgroun/advisor-backgroud.png"


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
const advisorbg = {
  background: `url(${advisor})`,
  
  backgroundSize: "cover",
  padding:"5px"
};
  return (
    <div style={advisorbg}>
      <div className="container mx-auto px-3">
        <div className="">
          <h1 className="text-4xl font-bold flex-auto my-5 text-red-700 text-center  ">
            Our Advisors
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 ">
          {images &&
            images.map((advisor, index) => (
              <VisibilitySensor
                key={index}
                partialVisibility={true}
                offset={{ bottom: 80 }}
                onChange={(isVisible) => imageVisibleChange(index, isVisible)}
              >
                <GridGalleryCard
                  imageUrl={advisor.imageurl}
                  name={advisor.Name}
                  details={advisor.Details}
                  show={imagesShownArray[index]}
                />
              </VisibilitySensor>
            ))}
        </div>
        <div className="col-span-5">
          <button className="bg-green-700 border-1 border-green-800 text-md font-medium  px-4 py-1 mt-2 block shadow-md rounded-md text-white hover:bg-green-900 uppercase">
            see others{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

function GridGalleryCard({ imageUrl, name, details, show }) {
  
  return (
    <div 
      className={`relative transition rounded	 ease-in duration-300 transform ${
        show ? "" : "translate-y-16 opacity-0"
      }`}
    >
      <div className="absolute inset-0 z-10 rounded	 flex transition duration-400 ease-in ">
        <div className="absolute transition-all rounded inset-0 bg-red-700 flex opacity-0  hover:opacity-70 ">
          <div class="grid grid-cols-1 gap-1">
            <div className=" w-max  ">
              <div className="absolute w-max right-0">
                <a
                  className="flex  items-center justify-center bg-white text-green-600 p-1 rounded-sm m-1"
                  href="/"
                >
                  <FaFacebookF />
                </a>
                <a
                  className="flex items-center justify-center bg-white text-green-600 p-1 rounded-sm m-1"
                  href="/"
                >
                  <AiOutlineTwitter />
                </a>
                <a
                  className="flex items-center justify-center bg-white text-green-600 p-1 rounded-sm m-1"
                  href="/"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <div className="mx-auto relative  p-2 text-white   tracking-widest text-sm ">
              <div class="w-fit mt-10 pt-10  ">
                {" "}
                <h3 className="   ">{name} </h3>
                <h4 className="text-xs  ">{details} </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="rounded" src={imageUrl} alt="" />
    </div>
  );
}

export default OurAdvisor;
