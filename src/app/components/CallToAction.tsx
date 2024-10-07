import React from "react";

const CallToAction = () => {
  return (
    <div className="p-16 md:p-32 ">
      <div className="relative bg-[#0A2640]  flex items-center justify-center rounded-xl overflow-hidden">
        <div className="absolute top-0 right-0">
          <div className="md:w-[500px] w-[300px] md:h-[300px] h-[200px] bg-[#1C3D5B] rounded-b-full"></div>
        </div>

        <div className="text-center space-y-8 z-20 py-20 md:px-20">
          <h1 className="text-white text-[24px] md:text-[48px] font-bold max-w-[500px] mx-auto">
            An enterprise template to ramp up your company website
          </h1>

          <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="md:w-[370px] h-[56px] rounded-full px-6 text-black bg-white"
            />

            <button className="bg-[#65E4A3] text-[#1C3D5B] text-[16px] font-bold rounded-[56px] py-4 px-[56px] hover:bg-[#56d892] transition-colors duration-300 w-[210px]">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
