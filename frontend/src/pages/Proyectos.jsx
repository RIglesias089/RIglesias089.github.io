import { Link } from 'react-router-dom'
import { TarjetaProyecto } from '../components/Tarjetas.jsx'
import { proyectos, perfil } from '../data.js'

export default function Proyectos() {
    return (
        <section className="seccion pagina">
            <Link className="enlace" to="/">
                ← Volver al inicio
            </Link>
            <h1 className="titulo-pagina">Proyectos</h1>
            <p className="lead">
                Todo el código está en mi{' '}
                <a className="enlace" href={perfil.github} target="_blank" rel="noopener noreferrer">
                    GitHub ↗
                </a>
                .
            </p>
            <div className="lista">
                {proyectos.map((p) => (
                    <TarjetaProyecto key={p.titulo} p={p} completa />
                ))}
            </div>
        </section>
    )
}
