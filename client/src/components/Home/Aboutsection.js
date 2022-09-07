import React from "react";
import about from "../../assets/HomBackgroun/about-secton.png";
import bigLogo from "../../assets/Logo-Large.png";
import CountDown from "./CountDown";
const Aboutsection = () => {
  const aboutBg = {
    background: `url(${about})`,

    backgroundSize: "cover",
    
  };
  return (
      <div style={aboutBg} className="mt-10">
          
          <CountDown/>
      <div className="container mx-auto py-4 px-3">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 ">
          <div>
            <img className="w-fit" src={bigLogo} alt="BCO Logo" srcset="" />

            <div className="ml-2">
              <h1 className=" text-5xl lg:text-6xl uppercase my-1 font-bold flex-auto text-green-700  ">
                {" "}
                Bangladesh
              </h1>
              <h1 className="lg:text-5xl text-4xl uppercase my-1 font-bold flex-auto  text-red-700   ">
                {" "}
                Career Olympiad
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                eos eius id, aspernatur blanditiis voluptates consequatur at
                cumque veritatis adipisci placeat! Vel officia omnis iusto iure
                nihil nobis, enim repellat deleniti, assumenda, ducimus quis
                provident laudantium temporibus! Reprehenderit consequatur est
                ex ullam nobis sunt. Error illo eos odio sapiente repellat eius
                aliquid obcaecati sit? Lorem ipsum dolor sit amet.
              </p>
              <div className="col-span-5">
                <button className="bg-green-700 border-1 border-green-800 text-md font-medium  px-4 py-1 mt-2 block shadow-md rounded-md text-white hover:bg-green-900 uppercase">
                  see others{" "}
                </button>
              </div>
            </div>
          </div>
          <div>
            {/* ------------------------------ */}
            <div className="px-4 pt-7">
              <div className="grid-cols-1 py-8 rounded-full border-4 border-white shadow shadow-black  bg-green-700">
                <h1 className=" text-5xl md:text-6xl uppercase  font-bold flex-auto  text-center text-white   ">
                  {" "}
                  1m+
                </h1>
                <h1 className=" tracking-wide  uppercase  font-bold flex-auto  text-center text-white   ">
                  {" "}
                  Participants{" "}
                </h1>
              </div>

              <div className="grid mt-5  grid-cols-2 gap-6">
                {" "}
                <div className=" py-6 rounded-full border-4 border-white shadow shadow-black  bg-gray-500">
                  <h1 className=" text-5xl md:text-6xl uppercase  font-bold flex-auto  text-center text-white   ">
                    {" "}
                    100+
                  </h1>
                  <h1 className=" tracking-wide  uppercase  font-bold flex-auto  text-center text-white   ">
                    {" "}
                    Advisors{" "}
                  </h1>
                </div>
                <div className=" py-6 rounded-full border-4 border-white shadow shadow-black  bg-blue-700">
                  <h1 className=" text-5xl md:text-6xl uppercase  font-bold flex-auto  text-center text-white   ">
                    {" "}
                    10k+
                  </h1>
                  <h1 className=" tracking-wide  uppercase  font-bold flex-auto  text-center text-white   ">
                    {" "}
                    Mentors{" "}
                  </h1>
                </div>
                <div className=" py-6 rounded-full border-4 border-white shadow shadow-black  bg-red-600">
                  <h1 className=" text-5xl md:text-6xl uppercase  font-bold flex-auto  text-center text-white   ">
                    {" "}
                    50k+
                  </h1>
                  <h1 className=" tracking-wide  uppercase  font-bold flex-auto  text-center text-white   ">
                    {" "}
                    Volunteers{" "}
                  </h1>
                </div>
                <div className=" py-6 rounded-full border-4 border-white shadow shadow-black  bg-orange-500">
                  <h1 className=" text-5xl md:text-6xl uppercase  font-bold flex-auto  text-center text-white   ">
                    {" "}
                    8
                  </h1>
                  <h1 className=" tracking-wide  uppercase  font-bold flex-auto  text-center text-white   ">
                    {" "}
                    Division{" "}
                  </h1>
                </div>
                <div className=" py-6 rounded-full border-4 border-white shadow shadow-black  bg-purple-700">
                  <h1 className=" text-5xl md:text-6xl uppercase  font-bold flex-auto  text-center text-white   ">
                    {" "}
                    64
                  </h1>
                  <h1 className=" tracking-wide  uppercase  font-bold flex-auto  text-center text-white   ">
                    {" "}
                    Districts{" "}
                  </h1>
                </div>
                <div className=" py-6 rounded-full border-4 border-white shadow shadow-black  bg-cyan-700">
                  <h1 className=" text-5xl md:text-6xl uppercase  font-bold flex-auto  text-center text-white   ">
                    {" "}
495                  </h1>
                  <h1 className=" tracking-wide  uppercase  font-bold flex-auto  text-center text-white   ">
                    {" "}
                    Upazila{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
