import React from "react";
import Header from "../components/shared/Header";
import TopHeader from "../components/shared/TopHeader";
import headerShapeImg from "../assets/Header-Shapes.png";
import CEO from "../assets/members/1.png";
import Director from "../assets/members/2.png";
import largeLogo from "../assets/Logo-Large.png";
import { Members } from "../utils/Members";
import Footer from "../components/shared/Footer";

const CentralComitee = () => {
  return (
    <>
      <TopHeader />
      <Header />

      <div className="shape hidden lg:block ">
        <img className="w-full h-[400px]" src={headerShapeImg} alt="" />
      </div>
      {/* CEO and team members section */}
      <section className="container mx-auto">
        <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 items-center">
          <div className="lg:hidden ">
            <img src={largeLogo} alt="" />
            <div className="name text-center ">
              <h2 className="text-4xl font-sans font-semibold text-red-500 uppercase ">
                Central Comitee
              </h2>
            </div>
          </div>
          <div>
            <img src={CEO} alt="" />
            <div className="name text-center ">
              <h2 className="text-[24px] font-sans font-semibold text-green-700">
                Gazi Mizanur Rahman
              </h2>
              <p className="text-[18px] text-slate-500 font-sans">
                Founder & CEO
              </p>
            </div>
          </div>
          <div className=" hidden lg:block">
            <img src={largeLogo} alt="" />
            <div className="name text-center ">
              <h2 className="text-4xl font-sans font-semibold text-red-500 uppercase ">
                Central Comitee
              </h2>
            </div>
          </div>
          <div>
            <img src={Director} alt="" />
            <div className="name text-center ">
              <h2 className="text-[24px] font-sans font-semibold text-green-700">
                Shakill Al-Amin
              </h2>
              <p className="text-[18px] text-slate-500 font-sans">
                Director General
              </p>
            </div>
          </div>
        </div>

        {/* mapping  */}

        <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:my-32 space-y-3 gap-8">
          {Members.map((member) => (
            <div key={member.id}>
              <div>
                <img src={member.img} alt="" />
                <div className="name text-center ">
                  <h2 className="text-[24px] font-sans font-semibold text-green-700">
                    {member.name}
                  </h2>
                  <p className="text-[18px] text-slate-500 font-sans">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* partners */}
        <section>
          <h2 className="text-4xl font-sans font-semibold text-center text-red-500">
            Our Partners
          </h2>
          <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 lg:my-16 gap-8">
            <div
              style={{ boxShadow: " inset -3px -3px 10px rgba(0,0,0,0.2)" }}
              className="rounded-md"
            >
              <img src={largeLogo} alt="" />
            </div>
            <div
              style={{ boxShadow: " inset -3px -3px 10px rgba(0,0,0,0.2)" }}
              className="rounded-md"
            >
              <img src={largeLogo} alt="" />
            </div>
            <div
              style={{ boxShadow: " inset -3px -3px 10px rgba(0,0,0,0.2)" }}
              className="rounded-md"
            >
              <img src={largeLogo} alt="" />
            </div>
            <div
              style={{ boxShadow: " inset -3px -3px 10px rgba(0,0,0,0.2)" }}
              className="rounded-md"
            >
              <img src={largeLogo} alt="" />
            </div>
            <div
              style={{ boxShadow: " inset -3px -3px 10px rgba(0,0,0,0.2)" }}
              className="rounded-md"
            >
              <img src={largeLogo} alt="" />
            </div>
            <div
              style={{ boxShadow: " inset -3px -3px 10px rgba(0,0,0,0.2)" }}
              className="rounded-md"
            >
              <img src={largeLogo} alt="" />
            </div>
            <div
              style={{ boxShadow: " inset -3px -3px 10px rgba(0,0,0,0.2)" }}
              className="rounded-md"
            >
              <img src={largeLogo} alt="" />
            </div>
            <div
              style={{ boxShadow: " inset -3px -3px 10px rgba(0,0,0,0.2)" }}
              className="rounded-md"
            >
              <img src={largeLogo} alt="" />
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default CentralComitee;
