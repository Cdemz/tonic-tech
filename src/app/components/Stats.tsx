import React from "react";

const Stats = () => {
  const stats = [
    { number: "120m", title: "Cool feature title" },
    { number: "10.000", title: "Cool feature title" },
    { number: "240", title: "Cool feature title" },
  ];

  return (
    <div className="bg-[#0A2640] p-10 md:p-20 md:py-30 flex flex-col text-center">
      <h3 className="text-[#F1F1F1] text-[16px] md:text-[20px] mb-4 mx-auto">
        Our Numbers
      </h3>
      <p className="text-white text-[24px] md:text-[48px] mb-8 ">
        Handshake infographic mass market crowdfunding iteration.
      </p>
      <div className="flex flex-col mx-auto space-y-6 md:space-y-0 md:flex-row md:space-x-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center group transition-all duration-300 ease-in-out"
          >
            <p className="manrope text-[64px] md:text-[96px] text-[#4FE9A4] group-hover:scale-110 transition-transform duration-300 ease-in-out">
              {stat.number}
            </p>
            <p className="text-[#F1F1F1] text-[18px] md:text-[24px] group-hover:text-white transition-colors duration-300 ease-in-out">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
