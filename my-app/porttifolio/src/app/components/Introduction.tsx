import Image from 'next/image';
import net from '../../../public/net.png';

export default function Intro() {
  return (
    <section className="border-2 border-black h-[45rem] w-full">
     <div className="border-2 border-red flex flex-line pl-20">

     <div className="flex flex-col justify-center items-center mt-5 w-4">
     <div className="w-5 h-5 rounded-full bg-[#915EFF]"></div>
     <div className="w-1 sm:h-80 h-40 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
     </div>

      <div className="border-2 ml-4 pt-5 mt-10  border-red w-25  h-[30rem] ">
        
  


   

     <h1 className="border-2 mt-6 border-red font-black pl-2 lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-black ">
      Hi, I'm <span className="text-[#915EFF]">Hebertt</span></h1>
      <p className="pl-4 text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">A Full Stack Engineer with full experience in IT industry</p>
      </div>

      </div>
    </section>
  );
}