import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from './components/pages/Inicio';
import Formacion from './components/pages/Formacion';
import Menu from './components/common/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Horarios from './components/pages/Horarios';

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Formacion' element={<Formacion/>} />
          <Route path='/Horarios' element={<Horarios/>} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
