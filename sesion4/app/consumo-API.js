
const axios = require('axios');

let urlApi = `https://jsonplaceholder.typicode.com/posts`;

// Make a request for a user with a given ID

// Ejemplo uso de axios usando then
axios.get(urlApi)
  .then(function ({data}) {
    // handle success
    console.log(data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


// Usando axios con async - await
  const getUsuarios = async () => {

    const {data} = await axios.get(urlApi);

    console.log(data);

  }

  getUsuarios();