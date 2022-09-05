import React from "react";
import VisibilitySensor from "react-visibility-sensor";


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
  
  return (
    <div className="container mx-auto px-3 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-medium flex-auto my-5 inline-block px-5 py-3 text-white ls_bdr-head" style={{background:"#079839"}}>
          Olympiad Categories
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 ">
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
    </div>
  );
}

export default OlympiadCategories;
