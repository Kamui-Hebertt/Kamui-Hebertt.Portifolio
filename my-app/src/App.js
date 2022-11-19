import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} / >
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills /> } />

      
      </Routes>
    </div>
  );
}

export default App;
