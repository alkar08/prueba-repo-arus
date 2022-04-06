
function getNombre(){
    console.log('Hola');
}

getNombre()

// Array function

const getNombreArrayFunction = (nombre) => {
    console.log(nombre);
};

getNombreArrayFunction('María');

//Funcion Anónima

(function(nombre, apellido) {
    console.log(nombre, apellido);
})('Jesús', 'de Nazareth');



const getPrimerNombre = (nombre) =>{ 
    console.log(nombre);
};

const getApellido = (apellido) =>{ 
    console.log(apellido);
};

const getCargo = (cargo) =>{ 
    console.log(cargo);
};


module.exports = {
    getPrimerNombre,
    getApellido,
    getCargo
};
