import React, { useContext, useEffect }  from 'react';
import Loading from '../components/Loading';
import SideBar from '../components/SideBar';
import providerFile from '../context/contex';
import { motion } from "framer-motion"

const text1 = 'Hi,';
const text2 = "i'm Hebertt";
const text3 = 'Web Developer';

const spanVariants = {
  visible: { y: 0, scaleY: 1},
  hover:{ y: [-1, -2, -2.8,0.9,0], scaleY: [1, 1.3,0.8, 1 , 1.2],
     color: 'red'},
}

function Home () {
    const { loading, setloading } =  useContext(providerFile);

    useEffect(
        () => {
          let timer1 = setTimeout(() => setloading(false), 2000);
          return () => {
            clearTimeout(timer1);
          };
        },
        []
      );
  
        return(
            <div className='allContent'>
                
                
         {loading ? <Loading /> : ( 
                <main className='home1'>
                  <div className='home-page'>
                  <section className='landing-left-section'>
                  <div className='text'>
                <h2>{text1.split('').map((letter, i)=> (
                  <motion.span key={ i } variants={ spanVariants} initial="visible" whileHover="hover"  >{ letter }</motion.span>
                ))} </h2>
                <h2>{text2.split('').map((letter, i)=> (
                 <motion.span key={ i } variants={ spanVariants} initial="visible" whileHover="hover"  >{ letter }</motion.span>
                ))} </h2>
                <h2>{text3.split('').map((letter, i)=> (
                  <motion.span key={ i } variants={ spanVariants} initial="visible" whileHover="hover"   >{ letter }</motion.span>
                ))} </h2>
                </div>
                </section>
                </div>
                  <SideBar />
                </main>)
          }   
        
            </div>
        )
    }

export default Home;