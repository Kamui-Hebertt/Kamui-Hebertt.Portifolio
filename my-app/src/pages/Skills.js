import React, {  useContext, useEffect } from 'react';
import Loading from '../components/Loading';
import SideBar from '../components/SideBar';
import providerFile from '../context/contex';



function Skills () {
    const { loading, setloading, english   } = useContext(providerFile);

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
         {loading ? <Loading /> : (
         <>{ english ? (
           <main className='skillsMain'>
           <h1 className='titleSkills'>Skills And Experinces</h1> 
          <div class="container">
  <div class="col">
    <h2 class="titulo">Front-End Skills</h2>
   
    <ul class="skill">
      <li><span class="blueline html"></span><em>HTML</em></li>
      <li><span class="blueline css"></span><em>CSS</em></li>
      <li><span class="blueline javascript"></span><em>ReactJS</em></li> 
      <li><span class="blueline php"></span><em>Javascript</em></li>
      <li><span class="blueline jquery"></span><em>TypeScript</em></li>
    </ul>
  </div>
   
  </div>

              </main>
              ) : (        <main className='skillsMain'>
              <h1 className='titleSkills'>Habilidades & Experiências</h1> 
             <div class="container">
     <div class="col">
       <h2 class="titulo">Habilidades de Front-end</h2>
=
       <ul class="skill">
         <li><span class="blueline html"></span><em>HTML</em></li>
         <li><span class="blueline css"></span><em>CSS</em></li>
         <li><span class="blueline javascript"></span><em>ReactJS</em></li> 
         <li><span class="blueline php"></span><em>Javascript</em></li>
         <li><span class="blueline jquery"></span><em>TypeScript</em></li>
       </ul>
     </div>
      
     </div>
   
                 </main>)}</>)}   
            </div>
        )
    }

export default Skills;