import { Link } from 'react-router-dom'
import { TarjetaFormacion } from '../components/Tarjetas.jsx'
import { formacion } from '../data.js'

export default function Certificaciones() {
    return (
        <section className="seccion pagina">
            <Link className="enlace" to="/">
                ← Volver al inicio
            </Link>
            <h1 className="titulo-pagina">Formación y certificaciones</h1>
            <div className="lista">
                {formacion.map((f) => (
                    <TarjetaFormacion key={f.titulo} f={f} completa />
                ))}
            </div>
        </section>
    )
}
