const db = require("../models");
const alejandroCorrea = db.alejandroCorrea;

exports.findAll = async (req, res) => {

    try {

        const respuesta = await alejandroCorrea.findAll({
            // where: {
            //     std_id: 2, // Con el where podemos colocar la condición que queramos con el nombre del campo en la tabla
            //     // std_sexo: req.query.sexo // Con el where podemos colocar la condición que queramos con el nombre del campo en la tabla
            // },
            raw: true // Trae la respuesta más limpia
        });
        res.send(respuesta);

    } catch (error) {
        throw error;
    }


    // alejandroCorrea
    //     .findAll()
    //     .then((data) => {
    //         res.send(data);
    //     })
    //     .catch((err) => {
    //         res.status(500).send({
    //             mensaje: err.message || "Se presentó error consultando la tabla",
    //         });
    //     });
};

// exports.create = (req, res) => {

//     const lista = {
//         std_nombre: req.query.nombre,
//         std_edad: req.query.edad,
//         std_sexo: req.query.sexo,
//     };

//     alejandroCorrea.create(lista).then((data) => {
//         res.send(data)
//     }).catch((err) => {
//         res.status(500).send({
//             mensaje: err.message || "Se presentó error insertando en la tabla",
//         });
//     });
// };

exports.create = async (req, res) => {

    try {
        const lista = {
            std_nombre: req.query.nombre,
            std_edad: req.query.edad,
            std_sexo: req.query.sexo,
        };

        const respuesta = await alejandroCorrea.create(lista);
        res.send(respuesta);
    } catch (error) {
        throw error;
    }
};