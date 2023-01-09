import React, {  useContext, useEffect } from 'react';
import Loading from '../components/Loading';
import SideBar from '../components/SideBar';
import providerFile from '../context/contex';



function Skills () {
    const { loading, setloading, english   } = useContext(providerFile);

    useEffect(
        () => {
          setloading(true);
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
           <>
           <h1 className='titleSkills'>Skills And Experinces</h1> 
          <div className="container">
  <div className="col">
    <h2 className="titulo">Front-End Skills</h2>
   
    <ul className="skill">
      <li><span className="blueline html"></span><em>HTML</em></li>
      <li><span className="blueline css"></span><em>CSS</em></li>
      <li><span className="blueline javascript"></span><em>ReactJS</em></li> 
      <li><span className="blueline php"></span><em>Javascript</em></li>
      <li><span className="blueline jquery"></span><em>TypeScript</em></li>
    </ul>
  </div>

  <div className="textSkills">
    <p className="descriptionSkill">I'm a front-end developer, currently working on personal projects and developing projects for TRYBE as student,
     Trybe is a web development school that has a genuine commitment to the professional success of its students,
     but at same time working on some projects.
      I'm studying a bachelor's degree in software engineer.
       My main stacks are ReactJs, Css, Scss, Redux , Context , JavaScript , CSS , HTML , Jest/Unity test , RTL.
        I'm also starting to study some Back-End stacks such as MySql.</p>
  </div>
   
  </div>

              </>
              ) : ( 
                 <main className='skillsMain'>
              <h1 className='titleSkills'>Habilidades & Experiências</h1> 
             <div className="container">
     <div className="col">
       <h2 className="titulo">Habilidades de Front-end</h2>

       <ul className="skill">
         <li><span className="blueline html"></span><em>HTML</em></li>
         <li><span className="blueline css"></span><em>CSS</em></li>
         <li><span className="blueline javascript"></span><em>ReactJS</em></li> 
         <li><span className="blueline php"></span><em>Javascript</em></li>
         <li><span className="blueline jquery"></span><em>TypeScript</em></li>
       </ul>
     </div>
      
     </div>
   
                 </main>
                 )}
                 </>)}   
            </div>
        )
    }

export default Skills;