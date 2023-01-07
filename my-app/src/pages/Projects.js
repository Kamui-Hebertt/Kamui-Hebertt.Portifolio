import React, { useContext, useEffect } from 'react';
import Loading from '../components/Loading';
import SideBar from '../components/SideBar';
import providerFile from '../context/contex';
import trivia from '../styles/projectsImg/trivia.png';
import recipes from '../styles/projectsImg/recipes.png';
import MenuIcon from '@mui/icons-material/Menu';


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


      const openSideBar = () => {
        const x =  document.querySelector('.links')
     
        if (x.style.display === 'none') {
          return x.style.display = 'block';
       } else {
        return   x.style.display = 'none';
       }
           
         }
          console.log('adas')
        return(
            <div className='allContent'>
              <div className="projectHamburger">
          <button onClick={ openSideBar } >
              <MenuIcon />
              </button>
              </div>
           <SideBar />
          {loading ? <Loading /> : (
          <>
          <div className="pro">
            <h2 className="titleProject">Projects</h2>

          <ul className="someProjects">
            <li>
              <a href="https://trivia-project-redux.vercel.app/" target="_blank" rel="noreferrer">
                <img src={ trivia } alt="link" className="projectImg" />
                </a>
             
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