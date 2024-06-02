import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Inicio from './components/pages/Inicio';
import Formacion from './components/pages/Formacion';
import Menu from './components/common/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Horarios from './components/pages/Horarios';
import Planes from './components/pages/Planes';
import Contacto from './components/pages/Contacto';
import { useEffect } from 'react';
import FooterMenu from './components/common/FooterMenu';

function App() {

  useEffect(() => {
    AOS.init();
  },[])
  
  return (
    <>
      <div className='App'>
        <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Formacion' element={<Formacion/>} />
          <Route path='/Horarios' element={<Horarios/>} />
          <Route path='/Planes' element={<Planes/>} />
          <Route path='/Contacto' element={<Contacto/>} />
        </Routes>
        <FooterMenu></FooterMenu>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
