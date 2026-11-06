function Externo({ href, children }) {
    return (
        <a className="enlace" href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    )
}

export function TarjetaFormacion({ f, completa = false }) {
    return (
        <article className="tarjeta">
            <p className="etiqueta">{f.tipo}</p>
            <h3>{f.titulo}</h3>
            <p className="entidad">
                {f.entidad} <span className="periodo">· {f.periodo}</span>
            </p>
            {completa && f.detalle && <p className="detalle">{f.detalle}</p>}
            {f.url && <Externo href={f.url}>Ver credencial ↗</Externo>}
        </article>
    )
}

export function TarjetaProyecto({ p, completa = false }) {
    return (
        <article className="tarjeta">
            <h3>{p.titulo}</h3>
            <p className="detalle">{completa ? p.detalle : p.resumen}</p>
            {completa && <p className="entidad">{p.resumen}</p>}
            <ul className="chips" aria-label="Tecnologías">
                {p.stack.map((t) => (
                    <li key={t}>{t}</li>
                ))}
            </ul>
            <div className="acciones">
                {p.repo && <Externo href={p.repo}>Repositorio ↗</Externo>}
                {p.demo && <Externo href={p.demo}>Ver en línea ↗</Externo>}
            </div>
        </article>
    )
}
