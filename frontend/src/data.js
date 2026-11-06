//Creamos el objeto para que sea accesible para otros como perfil
export const perfil = {
    nombre: 'Ricardo Iglesias', // REEMPLAZA si tu nombre público es otro
    rol: 'Desarrollador web',
    ubicacion: 'El Salvador · UTC−6',
    resumen:
        'Desarrollador web y de aplicaciones móviles, en constante aprendizaje. Busco proyectos que supongan un reto y en los que pueda aportar soluciones funcionales, bien probadas y pensadas para quien las va a usar.',
    github: 'https://github.com/RIglesias089',
    correo: 'iglesiasricardozhongli@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ricardo-iglesias-398aaa345/',
}

//Creamos un array en el que se tendran tres grupos, denominados con su nombre especifico.
export const stack = [
    { grupo: 'Frontend', items: ['JavaScript', 'React', 'HTML y CSS'] },
    { grupo: 'Backend', items: ['Node.js', 'Express', 'Java', 'C++'] },
    { grupo: 'Datos', items: ['PostgreSQL', 'SQL Server'] },
]

//Ahora con los datos de formacion, creamos un array el cual se divide con las {}
export const formacion = [
    {
        tipo: 'Estudios',
        titulo: 'Desarrollo de aplicaciones moviles',
        entidad: 'Colegio "Joyas de Ceren"',
        periodo: '2024',
        detalle:
            'Diplomado en desarrollo de aplicaciones moviles, con Android Studio y lenguajes de Java y XML.',
        url: '',//Archivo pdf de el diplomado en google drive.
    },
    {
        tipo: 'Estudios',
        titulo: 'Diplomado en "Machine Learning Elements"',
        entidad: 'Universidad Centroamericana "Jose Simeon Cañas',
        periodo: '2025',
        detalle: 'Diplomado en Machine Learning habilidades técnicas y prácticas que permiten transformar grandes volúmenes de datos en decisiones estratégicas e innovadoras',
        url: '',
    },
    {
        tipo: 'Estudios',
        titulo: 'Diplomado en "Data Analyst Fundamentals"',
        entidad: 'IBM',
        periodo: '2025',
        detalle: 'Capacitacion desde cero para el manejo, interpretacion y comunicacion de datos.',
        url: '',
    },
]

//Arreglo que tendra los distintos proyectos creados junto sus links a github
export const proyectos = [
    {
        titulo: 'Nombre de tu proyecto',
        resumen: 'Una línea que diga qué hace y para quién.',
        detalle: 'Problema que resuelve, qué parte hiciste tú y qué aprendiste.',
        stack: ['React', 'Node.js', 'Express'],
        repo: 'https://github.com/RIglesias089/NOMBRE-DEL-REPO',
        demo: '',
    },
]