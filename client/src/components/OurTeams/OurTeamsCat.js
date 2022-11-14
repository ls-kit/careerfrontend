import React from "react";
import { Link } from "react-router-dom";
import OlympiadBg from "../../assets/HomBackgroun/olympiad-cat-bg.png";
import CategoryCard from "./CategoryCard";

const OurTeamsCat = () => {
  const SectionBg = {
    backgroundImage: `url(${OlympiadBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center center",
  };
  return (
    <div>
      <div className='container mx-auto px-3 pb-20'>
        <div className='text-center mb-6'>
          <h2
            className='text-3xl font-medium flex-auto my-5 inline-block px-5 py-3 text-white ls_bdr-head relative'
            style={{ background: "#079839" }}
          >
            Our Teams
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:pt-10'>
          <div>
            <div className='text-center mb-6 flex justify-center'>
              <h2 className='border-2 border-red-500  px-6 py-4 font-medium uppercase '>Districts</h2>
            </div>
            <div className='flex flex-col justify-center md:flex-row '>
              <Link to={`${"district"}`}>
                <CategoryCard name={"Districts list"} css={"border-green-500"} />
              </Link>
              <Link to={`${"upazila"}`}>
                <CategoryCard name={"Upazila list"} css={"border-green-500"} />
              </Link>
            </div>
          </div>

          <div className='pt-5 md:pt-0'>
            <div className='text-center flex justify-center mb-6 '>
              <h2 className='border-2 border-red-500  px-6 py-4 font-medium  uppercase '>Universities</h2>
            </div>
            <div className='flex flex-col justify-center md:flex-row  '>
              <Link to={`university/${"public"}`}>
                <CategoryCard name={"Public"} css={"border-green-500"} />
              </Link>
              <Link to={`university/${"7college"}`}>
                <CategoryCard name={"7 college"} css={"border-green-500"} />
              </Link>
              <Link to={`university/${"private"}`}>
                <CategoryCard name={"Private"} css={"border-green-500"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamsCat;
