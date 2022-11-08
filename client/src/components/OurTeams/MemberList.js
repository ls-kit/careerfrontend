import React from "react";
import Member from "./Member";
import { Members } from "../../utils/Members";

const MemberList = ({ teamName }) => {
  return (
    <section className='container mx-auto px-3'>
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 lg:mb-32 space-y-3 gap-8'>
        {Members.map((member) => (
          <Member member={member} key={member.id} />
        ))}
      </div>
    </section>
  );
};

export default MemberList;
