import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import providerFile from './context/contex';
import { useState } from 'react';
import Contact from './pages/Contact';


function App() {

  const [english, setEnglish ] = useState(true);
  const [ loading, setloading ] = useState(true);

 

  const contexObj = {
    english,
     setEnglish,
    loading, setloading

  }

  return (
    <providerFile.Provider value={ contexObj }>
   
    <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills /> } />
          <Route path='/contact' element={<Contact />} />
          
      </Routes>
  </providerFile.Provider>
 
  );
}

export default App;
