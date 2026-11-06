import { useState } from 'react'

export default function Foto({ nombre }) {
    const [falta, setFalta] = useState(false)
    const iniciales = nombre
        .split(' ')
        .map((p) => p[0])
        .slice(0, 2)
        .join('')

    return (
        <figure className="foto">
            {falta ? (
                <div className="foto-vacia" role="img" aria-label="Espacio para tu foto">
                    <span className="foto-iniciales">{iniciales}</span>
                    <span className="etiqueta">public/foto.jpg</span>
                </div>
            ) : (
                <img
                    src={`${import.meta.env.BASE_URL}Foto_presentacion.jpg`}
                    alt={`Foto de ${nombre}`}
                    onError={() => setFalta(true)}
                />
            )}
        </figure>
    )
}
