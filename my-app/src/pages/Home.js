import React, { useContext, useEffect }  from 'react';
import Loading from '../components/Loading';
import SideBar from '../components/SideBar';
import providerFile from '../context/contex';
import H from '../styles/images/h.png';
import profile from '../styles/images/profile.jfif'
import MenuIcon from '@mui/icons-material/Menu';
import Footer from '../components/Footer';




function Home () {
    const { loading, setloading, english  } =  useContext(providerFile);
    



    const openSideBar = () => {
   const x =  document.querySelector('.links');

   if (x.style.display === 'none') {
     return x.style.display = 'block';
  } else {
   return   x.style.display = 'none';
  }
      
    }

    useEffect(
        () => {
           setloading(true);
          let timer1 = setTimeout(() => setloading(false), 2500);
          return () => {
            clearTimeout(timer1);
          };
        },
        []
      );

      
  

        return(
         
            <div className="allContent">
          <div className='menubtn' >
          <button onClick={ openSideBar } >
              <MenuIcon />
              </button>
              </div>
                <SideBar />
          {loading ? <Loading /> : (

          <>
             
            {english? (
            <div className="mainContent">
           <div className="content">
            
             <img src={profile} className="profileClass" alt='profile' />
             <div className='texti'>
            <p className='hi'>Hi! </p>
           <p className='hi1'> I'm <img src={H} className="nameLogo" alt="logo" />ebertt, Web Developer</p>
           </div>
           </div>
           
     
         <div className='about'>
           <div className="about1">
          <p>About Me</p>
          </div>
          <div className="allAbout">
            <p className="pAbout">I am obsessed with the Internet and how it works,
             so experimenting with new technologies is a lot of fun for me.
              I like to feel challenged and find personal satisfaction in learning new things.
                  </p>
          </div>
         </div>
         <Footer />
            </div>
            ) : ( 
            <div className="mainContent">
              <div className="content">
              <img src={ profile } className="profileClass" alt='profile' />
              <div className="texti">
             <p className='hi'>Olá!</p>  
             <p className='hi1'> Me chamo <img src={H} className="nameLogo" alt="logo" />
              ebertt, Desenvolvedor Web  </p>
              </div>
              </div>
              <div className="about">
           <div className="about1">
          <p>Sobre mim</p>
          </div>
          <div className="allAbout">
            <p className="pAbout">Sou obcecado pela Internet e como ela funciona,
             então experimentar novas tecnologias é muito divertido pra mim. Gosto de me sentir desafiado
              e encontro satisfação pessoal em aprender coisas novas. </p>

          </div>
         </div>
         <Footer />
            </div>
            
            )}


          </>)
           }  
           
            </div>
        )
    }

export default Home;