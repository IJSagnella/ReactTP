import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//importo las Paginas
import { Inicio } from './pages/Inicio'
import { Login } from './pages/Login'
import { Contacto } from './pages/Contacto'
import { Algo } from './pages/Algo'
//Menu
import { Menu } from './components/Menu'

export const App = () => {

  return (
    <BrowserRouter>
    <Menu/>
        <Routes>
          <Route path= '/' element={<Inicio/>} />
          <Route path= '/login' element={<Login/>} />
          <Route path= '/contacto' element={<Contacto/>} />
          <Route path= '/algo' element={<Algo/>} />
        </Routes>
    </BrowserRouter>
  )
}
export default App