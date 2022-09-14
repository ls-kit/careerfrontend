import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import OlympiadSegBg from "../../assets/HomBackgroun/olympiad-segment-bg.png"


function OlympiadSegment() {
  const olympiad = [
    {
      Name: "Bangla",
    },
    {
      Name: "English",
    },
    {
      Name: "Math",
    },
    {
      Name: "General Knowledge",
    },
  ];
  
  const SectionBg = {
    backgroundImage: `url(${OlympiadSegBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  }

  return (
    <div style={SectionBg}>
      <div className="container mx-auto px-3 py-10">
        <div className="text-center">
          <h2 className="text-3xl font-medium flex-auto my-5 text-red-700 inline-block shadow-lg shadow-gray-500 px-5 py-3 ls_bar">
            Olympiad Segments
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ">
          {olympiad &&
            olympiad.map((olympiad) => (
              <VisibilitySensor>
                <OlympiadCard 
                  name={olympiad.Name}
                />
              </VisibilitySensor>
            ))}
        </div>
      </div>
    </div>
  );
}

function OlympiadCard({name}) {
  
  return (
    <div className="shadow-xl text-center relative m-4 ls_box-border">
        <h2 className="flex h-full text-xl font-bold justify-center items-center p-6">{name}</h2>
    </div>
  );
}

export default OlympiadSegment;
