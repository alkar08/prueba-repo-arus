const EDAD = 30;
let mensaje = '';

// if (EDAD < 5) {
//     mensaje = 'Es un infante';
// }else if(EDAD > 5 && EDAD < 18) {
//     mensaje = 'Es un adolescente';
// }else if(EDAD > 18) {
//     mensaje = 'Es mayor';
// }

switch (EDAD) {
    case 5:
        mensaje = 'Es un infante';
        break;
    case 18:
        mensaje = 'Es un adolescente';
        break;
    case 30:
        mensaje = 'Es un abuelo';
        break;
    default:
        mensaje = 'Es Maria Angelica';
        break;
}

console.log(mensaje);