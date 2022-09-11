import React from "react";
import VisibilitySensor from "react-visibility-sensor";

function ProgramDetails() {
  const about = [
    {
      Title: "Program Title",
      Details: 'Bangladesh Career Olympiad',
    },
    {
      Title: "Program Type",
      Details: 'Competition on career education',
    },
    {
      Title: "Participation",
      Details: 'Student of Secondary School,  College, Madrasha,  Polytechnic and University.',
    },
    {
      Title: "Campaign",
      Details: 'Coming soon',
    },
    {
      Title: "Live Telecast",
      Details: 'National TV Channel, YouTube, Facebook.',
    },
  ];
  
  return (
    <div>
      <h2 className="text-lg md:text-3xl uppercase font-medium mb-3">
          <span className="text-zinc-600">PROGRAM DETAILS OF</span> <br></br>
          <span className="text-green-700">Bangladesh </span>
          <span className="text-red-600">Career Olympiad</span>
      </h2>
      <div>
        {about &&
          about.map((about) => (
            <VisibilitySensor>
              <AboutSec 
                title={about.Title}
                details={about.Details}
              />
            </VisibilitySensor>
          ))}
      </div>
    </div>
  );
}

function AboutSec({details, title}) {
  
  return (
    <div className="mb-4">
        <h3 className="uppercase text-red-600 font-medium">{title}</h3>
        <p className="font-light text-sm text-gray-600">{details}</p>
    </div>
  );
}

export default ProgramDetails;
