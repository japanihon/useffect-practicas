const getUser = async () => {

const userId = Math.floor(Math.random() * 10) + 1;

const url = "https://jsonplaceholder.typicode.com/users/"+userId
const res = await fetch(url);
const user = await res.json();

return user;
}

export default getUser


// Creamos una constante que genere numeros random para pasarla por user id y que genere random id //



// Como es un proceso asincrono debemos usar  await  para que espere a que se termina el proceso para ejecutar la respuesta  const res = await // async

// const url es para hacer la peticion donde van los datos de la api //

//  Para utilizar el await siempre debe haber una peticion async //