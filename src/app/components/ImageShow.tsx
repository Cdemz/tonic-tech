import Image from "next/image";
import React from "react";
import happpman from "../assets/happyman.png";
import happpywoman from "../assets/happywoman.png";
import green from "../assets/green.png";
import blue from "../assets/blue.png";
import meeting from "../assets/meeting.png";

const ImageShow = () => {
  return (
    <div className="relative">
      <div className="container mx-auto px-4 relative top-[-100px]">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex flex-col space-y-4">
            <div className="w-full lg:w-[300px] h-[285px] rounded-[24px] overflow-hidden group">
              <Image
                src={happpman}
                alt="Image 1"
                width={300}
                height={285}
                className="object-cover w-full h-full transition-transform transition-filter duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-[0.8]"
              />
            </div>
            <div className="w-full lg:w-[300px] h-[285px] rounded-[24px] overflow-hidden group">
              <Image
                src={blue}
                alt="Image 2"
                width={300}
                height={285}
                className="object-cover w-full h-full transition-transform transition-filter duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-[0.8]"
              />
            </div>
          </div>

          <div className="w-full lg:w-[400px] h-[400px] sm:h-[500px] lg:h-[632px] rounded-[24px] group">
            <Image
              src={happpywoman}
              alt="Image 3"
              width={400}
              height={632}
              className="object-cover w-full h-full rounded-[24px] transition-transform transition-filter duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-[0.8]"
            />
          </div>

          <div className="flex flex-col space-y-4">
            <div className="w-full lg:w-[300px] h-[285px] rounded-[24px] overflow-hidden group">
              <Image
                src={green}
                alt="Image 4"
                width={300}
                height={285}
                className="object-cover w-full h-full transition-transform transition-filter duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-[0.8]"
              />
            </div>
            <div className="w-full lg:w-[300px] h-[285px] rounded-[24px] overflow-hidden group">
              <Image
                src={meeting}
                alt="Image 5"
                width={300}
                height={285}
                className="object-cover w-full h-full transition-transform transition-filter duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-[0.8]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageShow;
