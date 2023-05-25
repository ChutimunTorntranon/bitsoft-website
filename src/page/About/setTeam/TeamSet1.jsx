import React from "react";

function TeamSet1() {
  return (
    <div className="Row1 grid xl:grid-cols-4 grid-cols-2 container mx-auto">
      <div className="HeadComponent w-full h-screen">
        <div className="hover:scale-110 duration-1000 xl:w-[13.438rem] xl:h-[7.438rem] mx-auto">
          <div className="xl:relative xl:mt-[-21rem] relative mt-4">
            <img
              src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.18169-9/11693855_604879689615757_8465763936101849986_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_vDx4GQPuiwAX-ZgoxS&_nc_ht=scontent.fbkk9-2.fna&oh=00_AfCoN7gHUOFfWyB1l9_3ssQM3PTxEiN4yS3BVdp4PhrOhw&oe=64798054"
              className="xl:w-[8.5rem] xl:h-[8.5rem] w-[7rem] h-[7rem] mx-auto rounded-3xl"
              alt="ImgCeo"
            />
          </div>
          <div className="xl:w-[13.438rem] xl:h-[7.438rem] bg-white xl:mx-auto xl:rounded-3xl xl:my-[7.5rem] text-center -mt-8 text-black text-[1rem] rounded-md">
            <div className="w-8 h-8"></div>
            <p className="p-1">Bhon Bunnag</p>
            <p className="text-center p-1">CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSet1;
