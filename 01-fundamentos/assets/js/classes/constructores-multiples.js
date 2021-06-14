

class Persona {

  static porObjecto({nombre, apellido, pais}) {
    return new Persona(nombre, apellido, pais);
  }

  constructor(nombre, apellido, pais) {

    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;

  }

  getInfo() {
    console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
  }

}

const nombre1 = 'Melisa',
      apellido1 = 'Flores',
      pais1 = 'Hondura';

const yobel = {
  nombre: 'Yobel',
  apellido: 'Tayson',
  pais: 'Peru'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjecto(yobel);

persona1.getInfo();
persona2.getInfo();
