import React, { useContext, useEffect }  from 'react';
import Loading from '../components/Loading';
import SideBar from '../components/SideBar';
import providerFile from '../context/contex';
import H from '../styles/images/h.png';
import profile from '../styles/images/profile.jfif'
import MenuIcon from '@mui/icons-material/Menu';



function Home () {
    const { loading, setloading, english, newSideBar, setNewSideBar } =  useContext(providerFile);
    const openSideBar = () => {
   const x =  document.querySelector('.links')

   if (x.style.display === 'none') {
     return x.style.display = 'block';
  } else {
   return   x.style.display = 'none';
  }
      
    }
    useEffect(
        () => {
          let timer1 = setTimeout(() => setloading(false), 2500);
          return () => {
            clearTimeout(timer1);
          };
        },
        []
      );
  

        return(
         
            <div className='allContent'>
          <div className='menuBar' >
          <button onClick={ openSideBar } >
              <MenuIcon />
              </button>
              </div>
                <SideBar />
          {loading ? <Loading /> : (

          <>
             
            {english? (
            <div className="mainContent">
           
            <img src={profile} className="profileClass" alt='profile' />
        <div className='texti'>
            <p className='hi'>Hi! </p>
           <p className='hi1'> I'm <img src={H} className="nameLogo" alt="logo" />ebertt, Web Developer</p>
            
            
           </div>
      
            </div>) : ( 
            <div className="mainContent">
              <img src={ profile } className="profileClass" alt='profile' />
              <div className='texti'>
             <p className='hi'>Olá!</p>  
             <p className='hi2'> Me chamo <img src={H} className="nameLogo" alt="logo" />
              ebertt, Desenvolvedor Web  </p>
              </div>
            </div>
            
            )}


          </>)
           }  
            </div>
        )
    }

export default Home;