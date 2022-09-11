import React from "react";
import VisibilitySensor from "react-visibility-sensor";


function OlympiadRound() {
  const olympiad = [
    {
      SerialNo: "01",
      Name: "Upazilla Round",
      Details: "Lorem ipsum dollar sit ammet",
    },
    {
      SerialNo: "02",
      Name: "District Round",
      Details: "Lorem ipsum dollar sit ammet",
    },
    {
      SerialNo: "03",
      Name: "National Round",
      Details: "Lorem ipsum dollar sit ammet",
    },
    {
      SerialNo: "04",
      Name: "Grand Finale",
      Details: "Lorem ipsum dollar sit ammet",
    },
  ];
  
  return (
    <div className="container mx-auto px-3 pt-8 mb-24">
      <div className="text-center">
        <h2 className="text-3xl font-medium flex-auto my-5 text-red-700 text-emerald-800 mb-16">
          Olympiad Round
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {olympiad &&
          olympiad.map((olympiad) => (
            <VisibilitySensor>
              <OlympiadCard 
                serialNo={olympiad.SerialNo}
                name={olympiad.Name}
                details={olympiad.Details}
              />
            </VisibilitySensor>
          ))}
      </div>
    </div>
  );
}

function OlympiadCard({name, details, serialNo}) {
  
  return (
    <div className="round-bdr m-auto">
        <div className="d-flex flex-col text-center justify-center items-center ls-round-bdr rounded-full relative overflow-hidden">
            <div className="serial-round">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="serial-shape">
                    <path fill="red" fill-opacity="1" d="M0,96L80,133.3C160,171,320,245,480,256C640,267,800,213,960,176C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
                <h3 className="serial-no">{serialNo}</h3>
            </div>
            
            <h2 className="text-xl text-neutral-700 mt-4 mb-2">{name}</h2>
            <p className="text-xs text-neutral-700">{details}</p>
        </div>
    </div>
  );
}
export default OlympiadRound;
