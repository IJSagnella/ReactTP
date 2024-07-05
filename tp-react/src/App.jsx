import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//importo las Paginas
import { Inicio } from './pages/Inicio'
import { Login } from './pages/Login'
import { Contacto } from './pages/Contacto'
import { Consulta } from './pages/Consulta'
import { Admin } from './pages/admin/Admin'
import { Sucursales } from './pages/admin/Sucursales'
import { Empleados } from './pages/admin/Empleados'
import { Repuestos } from './pages/admin/Repuestos'
import { Productos } from './pages/admin/Productos'
import { Ordenes } from './pages/empleado/Ordenes'
import { OrdenInfo } from './pages/empleado/OrdenInfo'
import { Resumen } from './pages/empleado/Resumen'
import { Pedidos } from './pages/empleado/Pedidos'
import { Envios } from './pages/empleado/Envios'

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
        <Route path= '/admin' element={<Admin/>} />
        <Route path= '/admin/empleados' element={<Empleados/>} />
        <Route path= '/admin/sucursales' element={<Sucursales/>} />
        <Route path= '/admin/repuestos' element={<Repuestos/>} />
        <Route path= '/admin/productos' element={<Productos/>} />
        <Route path= '/empleado/ordenes' element={<Ordenes/>} />
        <Route path= '/empleado/ordenes/1' element={<OrdenInfo/>} />
        <Route path= '/empleado' element={<Resumen/>} />
        <Route path= '/empleado/pedidos' element={<Pedidos/>} />
        <Route path= '/empleado/envios' element={<Envios/>} />
      </Routes>
    <Footer/>
    </AuthProvider>
    </Router>
  )
}
export default App