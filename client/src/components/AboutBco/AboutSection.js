import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import bigLogo from "../../assets/Logo-Large.png";
import ProgramDetails from "./ProgramDetails";


function AboutSection() {
  const about = [
    {
      GrayText: "Know About",
      Details: '"Bangladesh Career Olympiad" is going to be held in Bangladesh for the first time with the slogan "My Skills, My Career". "Bangladesh Career Olympiad" is one of largest and influential Olympiad events in Bangladesh for the students of Secondary School,  College, Madrasha,  Polytechnic and University.',
    },
    {
      GrayText: "MISSION OF",
      Details: '"Bangladesh Career Olympiad" is going to be held in Bangladesh for the first time with the slogan "My Skills, My Career". "Bangladesh Career Olympiad" is one of largest and influential Olympiad events in Bangladesh for the students of Secondary School,  College, Madrasha,  Polytechnic and University.',
    },
    {
      GrayText: "Vision OF",
      Details: '"Bangladesh Career Olympiad" is going to be held in Bangladesh for the first time with the slogan "My Skills, My Career". "Bangladesh Career Olympiad" is one of largest and influential Olympiad events in Bangladesh for the students of Secondary School,  College, Madrasha,  Polytechnic and University.',
    },
    {
      Details: <ProgramDetails />,
    },
  ];
  return (
    <div className="container mx-auto px-3 py-8">
      <div className="mb-6">
        <img src={bigLogo} alt="logo" className="max-w-xs m-auto" />
      </div>
      <div>
        {about &&
          about.map((about) => (
            <VisibilitySensor>
              <AboutSec 
                GrayText={about.GrayText}
                details={about.Details}
              />
            </VisibilitySensor>
          ))}
      </div>
    </div>
  );
}

function AboutSec({details, GrayText}) 
{
    const TextGet = GrayText;
    let style;
    if(TextGet == null) {
        style = {
            display: 'none',
        };
    }
    return (
        <div className="mb-8 text-center md:text-left">
            <h2 className="text-lg md:text-3xl uppercase font-medium mb-3" style={style}>
                <span className="text-zinc-600">{GrayText}</span> <br></br>
                <span className="text-green-700">Bangladesh </span>
                <span className="text-red-600">Career Olympiad</span>
            </h2>
            <p className="font-light text-sm text-gray-600">{details}</p>
        </div>
    );
}

export default AboutSection;
