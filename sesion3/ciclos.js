let nombres = ['Juan', 'Pedro', 'Maria'];

let ciudades = ['Medellin', 'Bogota', 'Cali'];

const estudiantes = [{
        nombre: "Rosmira",
        carrera: "Matematico",
        semestre: 2,
        sexo: "F",
        materias: [{nombre: 'matematicas 1', nota: 2}]
    },
    {
        nombre: "Patricia",
        carrera: "Inginerio",
        semestre: 10,
        sexo: "F",
        materias: [{nombre: 'ingles', nota: 5}]
    },
    {
        nombre: "Guille",
        carrera: "Derecho",
        semestre: 5,
        sexo: "M",
        materias: [{nombre: 'penal', nota: 4}]
    },
    {
        nombre: "Leon",
        carrera: "Artes",
        semestre: 7,
        sexo: "M",
        materias: [{nombre: 'dibujo', nota: 4.5}, { nombre: 'sociales', nota: 5}]
    },
];

// Ejemplos con ciclos For

for (const estudiante of estudiantes) {
    console.log(estudiante.nombre);
}

for (const key in nombres) {
    console.log(nombres[key]);
}

for (const ciudad of ciudades) {
    console.log(ciudad);
    if (ciudad === 'Medellin') break;
}

ciudades.forEach(ciudad => {
    console.log(ciudad);
});


// Ejemplos con map y filter

estudiantes.map(c => {
    console.log(c.semestre);
});

estudiantes.map(c => console.log(c.semestre));

for (let index = 0; index < ciudades.length; index++) {
    console.log(ciudades[index]);

}

estudiantes.map(c => console.log(c.nombre));

const respuesta = estudiantes.filter( c => c.semestre >= 5).map(c => c.nombre);

const respuesta = estudiantes
.filter( 
    c => c.semestre >= 5 && c.materias.filter(m => m.nota > 2).length > 0      
).map( c => {
    return {
        nombre: c.nombre,
        materia: c.materias.map( k => k.nombre).join(', ')
    };
});

 console.log(respuesta);


// Ejemplo ciclo while y el do-while

let n = 0;

while( n < 3){
    console.log(n);
    n ++;
}

let i = 0, resultado = 0;

do {

    i++;
    resultado = resultado + i;
    
} while (i < 5);

