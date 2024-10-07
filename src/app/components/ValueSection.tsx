import Image from "next/image";
import React from "react";
import green from "../assets/green.png";
import blue from "../assets/blue.png";

const ValuesSection = () => {
  const values = [
    {
      title: "We are committed.",
      description:
        "Conversion angel investor entrepreneur first mover advantage.  ",
      subText: "Handshake infographic mass market crowdfunding iteration.",
      imgSrc: blue,
    },
    {
      title: "We are responsible.",
      description:
        "Conversion angel investor entrepreneur first mover advantage.  ",
      subText: "Handshake infographic mass market crowdfunding iteration.",
      imgSrc: green,
    },
    {
      title: "We aim for progress.",
      description:
        "Conversion angel investor entrepreneur first mover advantage.  ",
      subText: "Handshake infographic mass market crowdfunding iteration.",
      imgSrc: green,
    },
  ];

  return (
    <section className="bg-[#0A2640] text-white p-10 md:px-40">
      <div className="container mx-auto space-y-8 max-w-[800px]">
        <div className="">
          <h3 className="text-[20px] text-[#F1F1F1]">Our Values</h3>
          <h2 className="text-[48px] ">Things we believe in</h2>
          <p className="text-[#F1F1F1]">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
          </p>
        </div>

        <div className="space-y-10">
          {values.map((value, index) => (
            <div key={index} className="flex   space-x-6">
              <div className="w-[150px] h-[151px] rounded-[24px] overflow-hidden">
                <Image
                  src={value.imgSrc}
                  alt={value.title}
                  width={150}
                  height={151}
                  className="object-cover"
                />
              </div>

              <div className="mt-3">
                <h3 className="text-[24px] ">{value.title}</h3>
                <p className="text-[#F1F1F1]">{value.description}</p>
                <p className="text-[#F1F1F1]">{value.subText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
