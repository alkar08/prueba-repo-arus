
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./models'); // se importa el archivo index.js por defecto
//db.sequelize.sync();

// let corsOptions = {
//     origin:'http://localhost:8081',
// };

let corsOptions = ['http://localhost:8081', 'http://localhost:8082'];
// app.use(
//     cors({
//         origin: (origin, callback) => {
//             if (!origin) return callback(null, true);
//             if (corsOptions.indexOf(origin) === -1){
//                 return callback(
//                     new Error('La politica de CORS para esta url mo permite el acceso'),
//                     false
//                 );
//             } return callback(null, true);
//         },
//         credentials: true
//     })
// )

app.use(cors(corsOptions));

// se refiere al content-type, en este caso lo convierte a json
app.use(express.json());
app.use(express.urlencoded( {extends: true} ));


// app.get('/',(req, res) => {
//     const {id, name} = req.query; // desde el req.query se obtienen los parámetros enviados desde la url
//     console.log(id);
//     console.log(name);
//     res.json({ mensaje: 'Welcome!!! to my first API Method GET'});
// });

// app.post('/',(req, res) => {
//     console.log('-------------------------------------------------');
//     const {id, name} = req.body; // desde el req.body se obtiene lo que envía por el método post
//     console.log(id);
//     console.log(name);
//     // console.log(req.body);
//     // console.log(req.query);
//     console.log('-------------------------------------------------');
//     res.json({ mensaje: 'Welcome!!! to my first API Method POST'});
// });

// app.get('/',(req, res) => {
    
//     res.json({ mensaje: 'Welcome!!! to my first API Method GET'});
// });

// app.post('/',(req, res) => {
    
//     res.json({ mensaje: 'Welcome!!! to my first API Method POST'});
// });

require('./routes/alejandroCorrea.routes')(app);

const PORT = 8081; 

db.sequelize.sync({force: false}).then(()=> { // Si la variable force está en true borra todo, debe esta eb false
    console.log('sequelize.... db');
});

// app.listen( PORT, () => {
//     console.log(`Server corriendo por el puerto ${PORT}`);
// });

const server = app.listen(PORT, function() {
    let host = server.address().address;
    console.log("SERVIDOR BACKEND EN http;//%s:%s", host, PORT);
});