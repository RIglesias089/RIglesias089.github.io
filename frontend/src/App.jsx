//importamos los componentes y demas de react que usarmeos

import { useEffect } from 'react'
import { NavLink, Link, Route, Routes, useLocation } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'
import Certificaciones from './pages/Certificaciones.jsx'
import Proyectos from './pages/Proyectos.jsx'
import { perfil } from './data.js'

//funcion la cual busca hacer que al cambiar la ruta o algo, la pagina vuelva automaticamente scrolleando hacia arriba
function SubirAlCambiar() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

//Implementamos una funcion la cual crea la cabecera de la pagina con HTML
function Cabecera() {
  return(
      <header className="cabecera">
        <Link to="/" className="marca">
          {perfil.nombre}
        </Link>
        <nav aria-label="Principal">
          <NavLink to="/" end>
            Inicio
          </NavLink>
          <NavLink to="/certificaciones">Formación</NavLink>
          <NavLink to="/proyectos">Proyectos</NavLink>
        </nav>
      </header>
  )
}

