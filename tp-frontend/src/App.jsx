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
import { EmpleadosAlta } from './pages/admin/EmpleadosAlta'
import { AdminOrdenes } from './pages/admin/AdminOrdenes'
import { AdminOrdenInfo } from './pages/admin/AdminOrdenInfo'
import { AdminOrdenAlta } from './pages/admin/AdminOrdenAlta'
import { Ordenes } from './pages/empleado/Ordenes'
import { OrdenInfo } from './pages/empleado/OrdenInfo'
import { Resumen } from './pages/empleado/Resumen'


//Menu

import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
//Contextos

import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './context/PrivateRoute';

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

        <Route element={<PrivateRoute rolRequerido={1}/>}>
          <Route path="/admin" element={<Admin />} />
          <Route path= '/admin/empleados' element={<Empleados/>} />
          <Route path= '/admin/empleados/alta' element={<EmpleadosAlta/>} />
          <Route path= '/admin/sucursales' element={<Sucursales/>} />
          <Route path= '/admin/ordenes' element={<AdminOrdenes/>} />
          <Route path= '/admin/ordenes/:id' element={<AdminOrdenInfo/>} />
          <Route path= '/admin/ordenes/alta' element={<AdminOrdenAlta/>} />
        </Route>

        <Route element={<PrivateRoute rolRequerido={2}/>}>
          <Route path= '/empleado/ordenes' element={<Ordenes/>} />
          <Route path= '/empleado/ordenes/:id' element={<OrdenInfo/>} />
          <Route path= '/empleado' element={<Resumen/>} />
        </Route>

      </Routes>
    <Footer/>
    </AuthProvider>
    </Router>
  )
}
export default App