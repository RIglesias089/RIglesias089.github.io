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