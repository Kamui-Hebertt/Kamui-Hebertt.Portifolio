import React, { useContext, useEffect } from 'react';
import Loading from '../components/Loading';
import SideBar from '../components/SideBar';
import providerFile from '../context/contex';
import MenuIcon from '@mui/icons-material/Menu';
import Footer from '../components/Footer';
import { project } from '../service/api';
import Card from '../components/Card'


function Projects() {
  const { loading, setloading, english, openSideBar } = useContext(providerFile);
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


  return (
    <div className='allContent'>
      
      <SideBar />

      {loading ? <Loading /> : (
            <div className="allProjects">
            
            <div className="projectHamburger">
        <button onClick={openSideBar} >
          <MenuIcon />
        </button>
      </div>
            
            <h2 className="titleProject">{english ? "Some of my projects" : "Alguns dos meus projetos"}</h2><div className='carAll'>
          {<div className="pro">


            {project.length > 0 && project.slice(0,3).map((obj) => <Card key={obj.id} project={obj} />)}

          </div>}

          {<div className="pro2">

          {project.length > 0 && project.slice(3,6).map((obj) => <Card key={obj.id} project={obj} />)}
      

          </div>}

        </div>
        </div>
      )}
    {loading ? null : (<Footer />)}  
    </div>
  )
}

export default Projects;