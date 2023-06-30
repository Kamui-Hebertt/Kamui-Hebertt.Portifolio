import Image from 'next/image';
import net from '../../../public/net.png';

export default function Intro() {
  return (
    <section className="border-2 border-black h-[37rem] w-full">
      <div className="border-2 border-black w-35 h-[35rem]">
        
  

     <div>
     <h1 className="font-black pl-2 lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-black">
      Hi, I'm <span className="text-[#915EFF]">Hebertt</span></h1>
      </div>
      <p className="pl-4 text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">A Full Stack Engineer with full experience in IT industry</p>

      </div>
    </section>
  );
}