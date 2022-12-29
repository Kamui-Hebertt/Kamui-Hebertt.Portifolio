import React, {  useContext } from 'react';
import SideBar from '../components/SideBar';
import providerFile from '../context/contex';



function Skills () {
    const { setloading, loading } = useContext(providerFile);

  
   
        return(
            <div>
            <h2>skills</h2>
            <SideBar />
            </div>
        )
    }

export default Skills;