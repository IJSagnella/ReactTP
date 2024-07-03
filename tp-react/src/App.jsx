import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//importo las Paginas
import { Inicio } from './pages/Inicio'
import { Login } from './pages/Login'
import { Contacto } from './pages/Contacto'
import { Consulta } from './pages/Consulta'
import { Admin } from './pages/admin/Admin'
import { Sucursales } from './pages/admin/Sucursales'
/*import { Empleados } from './pages/admin/Empleados'
import { Repuestos } from './pages/admin/Repuestos'
import { Productos } from './pages/admin/Productos'*/
import { Ordenes } from './pages/empleado/Ordenes'
//Menu
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
//import { Layout } from './components/Layout'

import { AuthProvider } from './context/AuthContext'
/*
<Route path= '/admin/empleados' element={<Empleados/>} />
<Route path= '/admin/repuestos' element={<Repuestos/>} />
<Route path= '/admin/productos' element={<Productos/>} />
*/
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
        <Route path= '/admin' element={<Admin/>} />
        <Route path= '/admin/sucursales' element={<Sucursales/>} />
        <Route path= '/empleado/ordenes' element={<Ordenes/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
    </AuthProvider>
  )
}
export default App