

const yobel = {
  nombre: 'Yobel',
  edad: 25,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  }
}

const pedro = {
  nombre: 'Pedro',
  edad: 15,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  }
}

// yobel.imprimir();
// Necesita la palabra reservada new
function Persona(nombre, edad = 10) {

  console.log('Se ejecuto esta linea');

  this.nombre = nombre;
  this.edad = edad;

  this.imprimir = function() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  }

}

const maria = new Persona('Maria', 18);
const melissa = new Persona('Melissa', 35);
// console.log(maria);
maria.imprimir();
melissa.imprimir();