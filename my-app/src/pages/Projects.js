import React, { useContext, useEffect } from 'react';
import Loading from '../components/Loading';
import SideBar from '../components/SideBar';
import providerFile from '../context/contex';
import trivia from '../styles/projectsImg/trivia.png';
import recipes from '../styles/projectsImg/recipes.png';


function Projects () {
    const { loading, setloading } =  useContext(providerFile);

    useEffect(
        () => {
          setloading(true)
          let timer1 = setTimeout(() => setloading(false), 2000);
          return () => {
            clearTimeout(timer1);
          };
        },
        []
      );
          console.log('adas')
        return(
            <div className='allContent'>
           <SideBar />
          {loading ? <Loading /> : (
          <>
          <div className="pro">Projects

          <ul className="someProjects">
            <li>
              <a href="https://trivia-project-redux.vercel.app/" target="_blank" rel="noreferrer">
                <img src={ trivia } alt="link" className="projectImg" />
                </a>
                <p>Projeto Trivia</p>
              </li>
              <li>
              <a href="https://recipe-app-react-jade.vercel.app/" target="_blank" rel="noreferrer">
                <img src={ recipes } alt="link" className="projectImg" />
                </a>
              </li>
            
          </ul>
          
          </div>
          </>
          ) }  
            </div>
        )
    }

export default Projects;