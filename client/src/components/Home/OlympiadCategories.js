import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import OlympiadBg from "../../assets/HomBackgroun/olympiad-cat-bg.png";


function OlympiadCategories() {
  const olympiad = [
    {
      Name: "Secondary",
      category: "Class 1-5",
      instituteName: "College, Madrasha",
    },
    {
      Name: "Intermediate",
      category: "Class 5-10",
      instituteName: "College, Madrasha",
    },
    {
      Name: "Tertiary",
      category: "Class 10 Above",
      instituteName: "College, Madrasha",
    },
  ];
  
  const SectionBg = {
    backgroundImage: `url(${OlympiadBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center center'
  }

  return (
    <div style={SectionBg}>
      <div className="container mx-auto px-3 py-20">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-medium flex-auto my-5 inline-block px-5 py-3 text-white ls_bdr-head relative" style={{background:"#079839"}}>
            Olympiad Categories

            <span className="dotted"></span>
            <span className="dotted"></span>
            <span className="dotted"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
          {olympiad &&
            olympiad.map((olympiad) => (
              <VisibilitySensor>
                <OlympiadCard 
                  name={olympiad.Name}
                  category={olympiad.category}
                  instituteName={olympiad.instituteName}
                />
              </VisibilitySensor>
            ))}
        </div>
      </div>
    </div>
  );
}

function OlympiadCard({name, category, instituteName}) {
  
  return (
    <div className="text-center relative m-4 ls_bdr-secondary">
        <div className="flex flex-col shadow-xl h-full justify-center items-center p-6">
            <h2 className="text-xl font-bold">{name}</h2>
            <p>{category}</p>
            <p>{instituteName}</p>
        </div>
        <span className="dotted2"></span>
    </div>
  );
}

export default OlympiadCategories;
