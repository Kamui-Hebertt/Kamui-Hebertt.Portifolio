import React, { useContext } from 'react';
import Loading from '../components/Loading';
import SideBar from '../components/SideBar';
import providerFile from '../context/contex';



function Contact () {
   const { loading } = useContext(providerFile)
        return(
            <div className='allContent'>
                <SideBar />
          {loading ? <Loading /> : (<h2>contact</h2>) }  
            </div>
        )
    }

export default Contact;