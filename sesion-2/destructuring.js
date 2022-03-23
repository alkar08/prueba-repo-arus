
// const persona = {
//     nombre: 'Juana',
//     apellido: 'Muñoz',
//     amigo: {
//         nombre: 'Ana',
//         edad: 20,
//         amiguis:{nombre:'Alfred', edad: 45, apellido: 'Lopez'},
//     },
// };

// const {
//     amigo:{
//         amiguis: {
//             nombre: nombreFinal, 
//             edad: edadFinal, 
//             apellido: apellidoFinal 
//         },
//     },
// } = persona;

// console.log(nombreFinal, edadFinal, apellidoFinal);


const persona = {
    nombre: 'Juana',
    apellido: 'Muñoz',
    amigo: ['Maria', 'Carlos', 'Dani'],
};

const {nombre, apellido } = persona;

console.log(nombre, apellido);