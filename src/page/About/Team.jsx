import React from "react";
import TeamSet1 from "./setTeam/TeamSet1";
import TeamSet2 from "./setTeam/TeamSet2";

function Team() {
  return (
    <div className=" text-white text-center xl:h-[40rem] xl:mt-10 mt-5 ">
      <h3 className="text-[#F9CC07] text-[3rem] ">BitSoft Team</h3>
      <TeamSet1 />
      <TeamSet2 />
    </div>
  );
}

export default Team;
