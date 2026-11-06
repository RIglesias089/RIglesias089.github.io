import { Link } from 'react-router-dom'
import Foto from '../components/Foto.jsx'
import { TarjetaFormacion, TarjetaProyecto } from '../components/Tarjetas.jsx'
import { perfil, stack, formacion, proyectos } from '../data.js'

export default function Inicio() {
    return (
        <>
            <section className="hero">
                <div className="hero-texto">
                    <p className="etiqueta">
                        {perfil.rol} · {perfil.ubicacion}
                    </p>
                    <h1>{perfil.nombre}</h1>
                    <p className="lead">{perfil.resumen}</p>
                    <div className="acciones">
                        <Link className="boton" to="/proyectos">
                            Ver proyectos
                        </Link>
                        <a
                            className="boton boton-sec"
                            href={perfil.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub ↗
                        </a>
                    </div>
                </div>
                <Foto nombre={perfil.nombre} />
            </section>

            <section className="seccion" aria-labelledby="t-stack">
                <h2 id="t-stack">Con qué trabajo</h2>
                <div className="stack">
                    {stack.map((g) => (
                        <div key={g.grupo} className="stack-grupo">
                            <p className="etiqueta">{g.grupo}</p>
                            <ul className="chips">
                                {g.items.map((i) => (
                                    <li key={i}>{i}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="seccion" aria-labelledby="t-formacion">
                <div className="seccion-cab">
                    <h2 id="t-formacion">Formación y certificaciones</h2>
                    <Link className="enlace" to="/certificaciones">
                        Ver todas →
                    </Link>
                </div>
                <div className="fila">
                    {formacion.slice(0, 3).map((f) => (
                        <TarjetaFormacion key={f.titulo} f={f} />
                    ))}
                </div>
            </section>

            <section className="seccion" aria-labelledby="t-proyectos">
                <div className="seccion-cab">
                    <h2 id="t-proyectos">Proyectos</h2>
                    <Link className="enlace" to="/proyectos">
                        Ver todos →
                    </Link>
                </div>
                <div className="fila">
                    {proyectos.slice(0, 3).map((p) => (
                        <TarjetaProyecto key={p.titulo} p={p} />
                    ))}
                </div>
            </section>
        </>
    )
}
