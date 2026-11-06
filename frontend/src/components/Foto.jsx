import { useState } from 'react'
//Para colocar la foto hay que ponerla en el apartado de public
// Coloca tu foto en: frontend/public/foto.jpg
// Si el archivo no existe, se muestra el recuadro de ejemplo.
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
                    src={`${import.meta.env.BASE_URL}foto.jpg`}
                    alt={`Foto de ${nombre}`}
                    onError={() => setFalta(true)}
                />
            )}
        </figure>
    )
}
