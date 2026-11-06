//Creamos el objeto para que sea accesible para otros como perfil
export const perfil = {
    nombre: 'Ricardo Iglesias', // REEMPLAZA si tu nombre público es otro
    rol: 'Desarrollador web',
    ubicacion: 'El Salvador · UTC−6',
    resumen:
        'Desarrollo sitios y aplicaciones con JavaScript, Node.js, Express y React, apoyados en bases de datos PostgreSQL y SQL Server. Mi backend también puede construirse con Java o C++. Estudiante de Ingeniería Informática.',
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
        periodo: '16/01/2024 - 17/11/2024',
        detalle:
            'Diplomado en desarrollo de aplicaciones moviles, con Android Studio y lenguajes de Java y XML.',
        url: '',//Archivo pdf de el diplomado en google drive.
    },
    {
        tipo: 'Estudios',
        titulo: 'Diplomado en ',
        entidad: 'Universidad Centroamericana "Jose Simeon Cañas',
        periodo: '2025',
        detalle: '',
        url: '',
    },
    {
        tipo: 'Estudios',
        titulo: 'Diplomado en',
        entidad: '', 
        periodo: '2025',
        detalle: '',
        url: '',
    },
]