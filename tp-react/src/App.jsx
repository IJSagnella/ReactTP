import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//importo las Paginas
import { Inicio } from './pages/Inicio'
import { Login } from './pages/Login'
import { Contacto } from './pages/Contacto'
import { Consulta } from './pages/Consulta'
import {Empleado} from './pages/Empleado'
import {Admin} from './pages/Admin'

//Menu

import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Layout } from './components/Layout'
//Contextos
import { AuthProvider } from './context/AuthContext'

export const App = () => {

  return (

    <Router>
    <AuthProvider>
    <Nav/>
      <Routes>
        <Route path= '/' element={<Inicio/>} />
        <Route path= '/contacto' element={<Contacto/>} />
        <Route path= '/consulta' element={<Consulta/>} />
        <Route path= '/login' element={<Login/>} />
        <Route path= '/empleado' element={<Empleado/>} />
        <Route path= '/admin' element={<Admin/>} />
      </Routes>
    <Footer/>
    </AuthProvider>
    </Router>
  )
}
export default App