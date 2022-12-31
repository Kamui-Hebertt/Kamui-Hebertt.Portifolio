import React, {  useContext, useEffect } from 'react';
import Loading from '../components/Loading';
import SideBar from '../components/SideBar';
import providerFile from '../context/contex';



function Skills () {
    const { loading, setloading } = useContext(providerFile);

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
           <SideBar />
         {loading ? <Loading /> : (<h2>skills</h2>)}   
            </div>
        )
    }

export default Skills;