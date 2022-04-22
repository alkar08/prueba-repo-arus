
const express = require('express');
const cors = require('cors');
const app = express();

// let corsOptions = {
//     origin:'http://localhost:8081',
// };

let corsOptions = ['http://localhost:8081', 'http://localhost:8082'];
app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin) return callback(null, true);
            if (corsOptions.indexOf(origin) === -1){
                return callback(
                    new Error('La politica de CORS para esta url mo permite el acceso'),
                    false
                );
            } return callback(null, true);
        },
        credentials: true
    })
)

app.use(cors(corsOptions));

// se refiere al content-type, en este caso lo convierte a json
app.use(express.json());
app.use(express.urlencoded( {extends: true} ));

app.get('/',(req, res) => {
    res.json({ mensaje: 'Welcome!!! to my first API'});
});

const PORT = 8081;

app.listen( PORT, () => {
    console.log(`Server corriendo por el puerto ${PORT}`);
});

const server = app.listen(PORT, function() {
    let host = server.address().address;
    console.log("SERVIDOR BACKEND EN htt´p;//%s:%s", host, PORT);
});