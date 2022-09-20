import React from "react";
import { OrganizerMember } from "../../utils/OrganizerMember";

const OrganizerBox = () => {
  return (
    <>
      {/* CEO and team members section */}
      <section className="container mx-auto">

        {/* mapping  */}

        <div class="grid lg:grid-cols-5 sm:grid-cols-1 lg:my-10 gap-8">
          {OrganizerMember.map((member) => (
            <div key={member.id}>
              <div className="border-4 rounded-md border-green-700">
                <img src={member.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OrganizerBox;