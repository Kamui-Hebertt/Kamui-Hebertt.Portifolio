import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import providerFile from './context/contex';
import { useState } from 'react';
import Contact from './pages/Contact';
import brCv from './service/Curriculo.pdf'
import enCv from './service/en-cv.pdf';


function App() {

  const [english, setEnglish ] = useState(true);
  const [ loading, setloading ] = useState(true);
  const [newSideBar, setNewSideBar] = useState(false) 

  const openSideBar = () => {
    const x =  document.querySelector('.links');
 
    if (x.style.display === 'none') {
      return x.style.display = 'flex';
   } else {
    return   x.style.display = 'none';
   }
       
     }

     const handleClickBr = () => {
      const link = document.createElement('a');
      link.href = brCv;
      link.download = 'Hebertt Nascimento Currículo.pdf';
      link.target = '_blank';
      link.click();
    };

    const handleClickEn = () => {
      const link = document.createElement('a');
      link.href = enCv;
      link.download = 'Hebertt Nascimento CV.pdf';
      link.target = '_blank';
      link.click();
    };


  const contexObj = {
    english,
     setEnglish,
    loading, setloading,
    newSideBar, setNewSideBar,
    openSideBar,
    handleClickBr,
    handleClickEn,

  }

  return (
    <providerFile.Provider value={ contexObj }>
   
    <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills /> } />
          <Route path='/contact' element={<Contact />} />
          
      </Routes>
  </providerFile.Provider>
 
  );
}

export default App;
