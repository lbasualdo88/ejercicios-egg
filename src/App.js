import Main from './ComponentesEjercicios/Ejercicio2/Main';
import Footer from './ComponentesEjercicios/Ejercicio2/Footer';
import { Nav } from './ComponentesEjercicios/Ejercicio2/Nav';
import Header from './ComponentesEjercicios/Header/index';
import { useState } from 'react';
import Main_2 from './ComponentesEjercicios/Ejercicio4';
import { Routes, Route } from 'react-router-dom';
import Pagina404 from './ComponentesEjercicios/404'



function App() {
  const [currentPath, setPath] = useState(window.location.pathname);

  return ( 
    <div className='divApp'>
      <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/about' element={<Main_2 />}/>
          <Route path='*' element={<Pagina404 />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;



