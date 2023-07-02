import Counter from "@/app/components/CounterTest";
import Nav from "@/app/components/Navbar";
import Intro from "./components/Introduction";
import net from '../../../public/net.png';

export default function Home() {


  return (
    <>

  <div className="divBack">

   <Nav />


   {/* <Counter /> */}
   <Intro />
    </div>
    </>
  );
}