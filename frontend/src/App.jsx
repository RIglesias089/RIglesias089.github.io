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

//Implementamos una funcion la cual crea el HTML con el pie de la pagina
function Pie() {
    return (
        <footer className="pie" id="contacto">
            <h2>¿Tienes un proyecto en mente?</h2>
            <div className="acciones">
                {perfil.correo && (
                    <span className="correo">
            <span className="etiqueta">Correo</span> {perfil.correo}
          </span>
                )}
                <a className="enlace" href={perfil.github} target="_blank" rel="noopener noreferrer">
                    GitHub ↗
                </a>
                {perfil.linkedin && (
                    <a className="enlace" href={perfil.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn ↗
                    </a>
                )}
            </div>
            <p className="etiqueta">© {new Date().getFullYear()} {perfil.nombre}</p>
        </footer>
    )
}

//definimos la estructura principal de la pagina, llamando a lo creado en las funciones anteriore
export default function App() {
    return (
        <div className="app">
            <SubirAlCambiar />
            <Cabecera />
            <main>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/certificaciones" element={<Certificaciones />} />
                    <Route path="/proyectos" element={<Proyectos />} />
                    <Route path="*" element={<Inicio />} />
                </Routes>
            </main>
            <Pie />
        </div>
    )
}

