//Creamos el objeto para que sea accesible para otros como perfil
export const perfil = {
    nombre: 'Ricardo Iglesias', // REEMPLAZA si tu nombre público es otro
    rol: 'Desarrollador de software',
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
        entidad: 'Universidad Centroamericana "Jose Simeon Cañas"',
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
        titulo: 'Snowlist',
        resumen: 'Aplicacion para la gestion de tareas y recordatorios, para estudiantes y trabajadores y todo aquel que quiera organizar su vida',
        detalle: 'Busca implementar en un solo lugar las funciones que todo estudiantes y trabajador buscan, desde gestion en el calendario, tareas y listado de objetivos de las tareas.',
        stack: ['Java', 'XML', 'JavaFX'],
        repo: 'https://github.com/RIglesias089/Gestionador_tareas.git',
        demo: '',
    },
    {
        titulo: 'La mesa de los mentirosos',
        resumen: 'La Mesa de los Mentirosos es un juego de cartas centrado en el engaño, la sospecha y la estrategia. Ambientado en una mesa ficticia, los jugadores deben engañar a los demás o descubrir quién está mintiendo.',
        detalle: 'Busca implementar todos los conocimientos todas las funciones y utilidades basicas y intermedias en C++, es un juego diseñado para 2 a 4 jugadores, donde a cada uno se le reparten 5 cartas. El mazo contiene Reyes, Reinas, Ases y un solo Joker, todos barajados y distribuidos al azar. La mesa (o un jugador por turno) pedirá una carta específica (Rey, Reina, As o Joker). Los demás jugadores deben colocar entre 1 y 3 cartas boca abajo (nunca 4 o 5). ',
        stack: ['C++'],
        repo: 'https://github.com/RIglesias089/La-mesa-de-los-mentirosos.git',
        demo: '',
    },
]