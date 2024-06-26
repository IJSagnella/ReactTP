import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//importo las Paginas
import { Inicio } from './pages/Inicio'
import { Login } from './pages/Login'
import { Contacto } from './pages/Contacto'
import { Consulta } from './pages/Consulta'
//Menu
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Layout } from './components/Layout'

import { AuthProvider } from './context/AuthContext'

export const App = () => {

  return (
    <AuthProvider>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path= '/' element={<Inicio/>} />
        <Route path= '/contacto' element={<Contacto/>} />
        <Route path= '/consulta' element={<Consulta/>} />
        <Route path= '/login' element={<Login/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
    </AuthProvider>
  )
}
export default App