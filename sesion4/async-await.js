

async function getLista() {
    for (let i = 15; i < 30; i++) {
        console.log(i);
    }
}

const getListaSin = async () => {
   console.log(await getLista()); 
}

// console.log(getLista());
console.log(getListaSin());