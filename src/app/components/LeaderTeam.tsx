import Image from "next/image";
import React from "react";
import aitch from "../assets/aitch.png";
import suitguy from "../assets/suitguy.png";
import indi from "../assets/indi.png";

const LeaderTeam = () => {
  const teamMembers = [
    {
      name: "Michael Scott",
      position: "General Manager",
      imgSrc: aitch,
    },
    {
      name: "Dwight Schrute",
      position: "General Manager",
      imgSrc: suitguy,
    },
    {
      name: "Pam Beetsley",
      position: "General Manager",
      imgSrc: indi,
    },
  ];

  return (
    <div className="p-20">
      <div className="mb-6 md:px-40 flex flex-col gap-2 mx-auto">
        <p className="text-[#777777]">Our team</p>
        <p className="text-black text-[28px] md:text-[48px]">
          The leadership team
        </p>
        <p className="text-[#777777] text-[20px]">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col text-start group transition-all duration-300 ease-in-out"
          >
            <div className="w-[300px] h-[354px] rounded-[24px] overflow-hidden mb-2 group-hover:scale-105 transition-transform duration-300 ease-in-out">
              <Image
                src={member.imgSrc}
                alt={`${member.name}'s photo`}
                width={300}
                height={354}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col text-start items-start pl-3">
              <p className="my-4 text-xl font-semibold text-[#333] group-hover:text-[#000] transition-colors duration-300">
                {member.name}
              </p>
              <p className="text-[#777]">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderTeam;
