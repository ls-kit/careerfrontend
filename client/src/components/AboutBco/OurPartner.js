import React from "react";
import VisibilitySensor from "react-visibility-sensor";

function OurPartner() {
  const images = [
    {
      imageurl: "https://i.ibb.co/7N4Vd8C/Logo-Large.png",
    },
    {
      imageurl: "https://i.ibb.co/7N4Vd8C/Logo-Large.png",
    },
    {
      imageurl: "https://i.ibb.co/7N4Vd8C/Logo-Large.png",
    },
    {
      imageurl: "https://i.ibb.co/7N4Vd8C/Logo-Large.png",
    },
    {
      imageurl: "https://i.ibb.co/7N4Vd8C/Logo-Large.png",
    },
    {
      imageurl: "https://i.ibb.co/7N4Vd8C/Logo-Large.png",
    },
    {
      imageurl: "https://i.ibb.co/7N4Vd8C/Logo-Large.png",
    },
    {
      imageurl: "https://i.ibb.co/7N4Vd8C/Logo-Large.png",
    },
  ];

  return (
    <div className="container mx-auto px-3 py-12">
    <div className="">
        <h1 className="text-3xl font-medium flex-auto mb-8 text-red-600 text-center">
        Our Partners
        </h1>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {images &&
        images.map((partner) => (
            <VisibilitySensor>
            <PartnerCard
                imageUrl={partner.imageurl}
            />
            </VisibilitySensor>
        ))}
    </div>
    </div>
  );
}

function PartnerCard({ imageUrl }) {
  
  return (
    <div className="shadow-md shadow-gray-500 p-4">
      <img className="rounded" src={imageUrl} alt="" />
    </div>
  );
}

export default OurPartner;
