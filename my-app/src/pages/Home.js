import React, { useContext, useEffect }  from 'react';
import Loading from '../components/Loading';
import SideBar from '../components/SideBar';
import providerFile from '../context/contex';

function Home () {
    const { loading, setloading } =  useContext(providerFile);

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
                
                
         {loading ? <Loading /> : ( 
                <main className='home1'>
                <h2>Home </h2>
                  <SideBar />
                </main>)
          }   
        
            </div>
        )
    }

export default Home;