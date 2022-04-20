
const express = require('express');
const cors = require('cors');
const app = express();

let corsOptions = {
    origin:'http://localhost:8081',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded( {extends: true} ));

app.get('/',(req, res) => {
    res.json({ mensaje: 'Bienvenidos a mi primera api con express'});
});

const PORT = 8081;

app.listen( PORT, () => {
    console.log(`Server corriendo por el puerto ${PORT}`);
});