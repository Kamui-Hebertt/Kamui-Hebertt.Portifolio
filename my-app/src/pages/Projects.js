import React, { useContext, useEffect } from 'react';
import Loading from '../components/Loading';
import SideBar from '../components/SideBar';
import providerFile from '../context/contex';
// import trivia from '../styles/projectsImg/trivia.png';
// import recipes from '../styles/projectsImg/recipes.png';
import MenuIcon from '@mui/icons-material/Menu';
// import wallet from '../styles/projectsImg/wallet.png';
import Footer from '../components/Footer';
import { project } from '../service/api';
import Card from '../components/Card'


function Projects() {
  const { loading, setloading } = useContext(providerFile);
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
    const x = document.querySelector('.links')

    if (x.style.display === 'none') {
      return x.style.display = 'block';
    } else {
      return x.style.display = 'none';
    }

  }
  console.log('adas')
  return (
    <div className='allContent'>
      <div className="projectHamburger">
        <button onClick={openSideBar} >
          <MenuIcon />
        </button>
      </div>
      <SideBar />
      {loading ? <Loading /> : (
        <>
          {/* <div className="pro">
            <h2 className="titleProject">{english ? "Projects" : "Projetos"}</h2>           
          </div> */}
          

          
        </>
      )}
      {project.length > 0 && project.map((obj) => <Card key={obj.id} project={obj} />)}
      <Footer />
    </div>
  )
}

export default Projects;