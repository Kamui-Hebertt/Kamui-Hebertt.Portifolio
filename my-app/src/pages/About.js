import React, { useContext } from 'react';
import Loading from '../components/Loading';
import SideBar from '../components/SideBar';
import providerFile from '../context/contex';



function About () {
   const { loading } = useContext(providerFile)
        return(
            <div>
          {loading ? <Loading /> : (<h2>about</h2>) }  
           <SideBar />
            </div>
        )
    }

export default About;