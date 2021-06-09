function saludar(nombre) {
  // console.log(arguments);
  // console.log('Hola ' + nombre);
  return [1, 2];
  
  console.log('Soy un codigo que esta despues del return');
}

const saludar2 = function(nombre) {
  console.log('Hola ' + nombre);
}

const saludarFlecha = nombre => {
  console.log('Hola ' + nombre);
}


const retornoDeSaludar = saludar('Yobel', 40, true, 'Peru'); // 1
// console.log(retornoDeSaludar[0], retornoDeSaludar[1])

// saludar2('Yobel');
// saludarFlecha('Yobel')

function sumar(a, b) {
  return a + b;
}

// const sumar2 = (a, b) => {
//   return a + b;
// }

const sumar2 = (a, b) => a + b;

function getAleatorio() {
  return Math.random();
}

// Funcion de flecha

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());
