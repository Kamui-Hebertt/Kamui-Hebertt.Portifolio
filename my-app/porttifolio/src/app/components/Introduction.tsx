import Image from 'next/image';
import net from '../../../public/net.png';
import { CSSProperties } from 'react';

export default function Intro() {


  const divStyle: CSSProperties = {
    transform: 'translateY(1.78718px) translateZ(0px)',
  };
  return (
    <section className="border-2 border-white h-[60rem] w-full bg-slate-500">
     <div className="border-2 border-red flex flex-line pl-8">

     <div className="flex flex-col justify-center items-center mt-5 w-4 h-15">
     <div className="w-5 h-5 rounded-full bg-[#915EFF]"></div>
     <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-purple-500 to-indigo-500"></div>
     </div>

     <div className="border-2 ml-4 mr-0 sm:mr-4 pt-5 mt-10 border-red w-25 h-[20rem]">
        

     <h1 className="border-2 mt-10 border-red font-black pl-2 lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white ">
      Hi, I'm <span className="text-[#915EFF]">Hebertt</span></h1>
      
      <div className="flex flex-col">
      <p className="pl-4 text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">A Full Stack Engineer </p>
      <p className="pl-4 text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">with full experience in IT industry</p>
      </div>
      </div>

      </div>


     {/* <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
     <div className="w-4 h-4 rounded-full bg-secondary mb-1 "></div>
      dasds
     </div> */}
    </section>
  );
}