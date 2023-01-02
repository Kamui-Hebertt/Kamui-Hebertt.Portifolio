import React, { useContext, useEffect }  from 'react';
import Loading from '../components/Loading';
import SideBar from '../components/SideBar';
import providerFile from '../context/contex';
import H from '../styles/images/h.png';
import profile from '../styles/images/profile.jfif'




function Home () {
    const { loading, setloading, english } =  useContext(providerFile);

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
          {loading ? <Loading /> : (<h2>
             
            {english? (<div className='mainContent'>
            <img src={profile} className="profileClass" alt='profile' />
            <h2>Hi, I'm 
             <img src={H} className="nameLogo" alt="logo" />ebertt, Web developer
            </h2>
            </div>) : ( <div className='mainContent'>
              <img src={profile} className="profileClass" alt='profile' />
              <h2>Olá, me chamo 
              <img src={H} className="nameLogo" alt="logo" />ebertt, desenvolvedor Web</h2>
            </div>
            
            )}


          </h2>) }  
            </div>
        )
    }

export default Home;