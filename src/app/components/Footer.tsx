import Image from "next/image";
import Logo_Boldo from "../assets/BlackLogo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] flex flex-col-reverse md:flex-row  md:gap-20 py-10 md:px-40 px-20">
      <div className="flex flex-col items-left gap-4  mt-10 md:mt-0  max-w-[300px]">
        <div className="">
          <Image src={Logo_Boldo} height={200} width={200} alt="log" />
        </div>
        <p className="   pt-2 text-[16px] leading-normal  text-gray-500">
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>
        <p className="pt-2  text-[16px]  text-gray-500">All rights reserved.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-3 w-full md:justify-between md:gap-16    text-[20px] ">
        <div className="flex flex-col gap-4 md:gap-10">
          <p className="text-[#000000] font-bold">Landings</p>
          <p className=" text-gray-500">Home</p>
          <p className=" text-gray-500">Products</p>
          <p className=" text-gray-500">Services</p>
        </div>
        <div className="flex flex-col gap-4 md:gap-10">
          <p className="text-[#000000] font-bold">Company</p>
          <p className=" text-gray-500">Home</p>
          <div className="flex flex-row gap-4">
            <p className=" text-gray-500">Careers</p>
            <p className="bg-[#65E4A3] md:text-[13px] text-[#0A2640] font-bold items-center justify-center text-center py-2 rounded-[20px] px-4">
              Hiring!
            </p>
          </div>
          <p className=" text-gray-500">Services</p>
        </div>
        <div className="flex flex-col gap-4 md:gap-10">
          <p className="text-[#000000] font-bold">Resources</p>
          <p className=" text-gray-500">Blog</p>
          <p className=" text-gray-500">Products</p>
          <p className=" text-gray-500">Services</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
