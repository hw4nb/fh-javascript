

let a = 5;



if ( a >= 10 ) { // undefined, null, una asignacion
  console.log('A es mayor o igual a 10');
} else {
  console.log('A es menor a 10');
}

// console.log('Fin de programa')

const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes...

console.log({dia})

if (dia === '1') {
  console.log('Domingo');
} else {
  console.log('No es domingo');
}


// Sin usar If Else, o Switch, unicamente objetos
dia = 1; // 0: domingo, 1: lunes;

// dia de la semana

const diaLetras = {
  0: () => 'Domingo',
  1: () => 'Lunes',
  2: () => 'Martes',
  3: () => 'Miercoles',
  4: () => 'Jueves',
  5: () => 'Viernes',
  6: () => 'Sabado'
};

const diaLetras2 = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado'
]

console.log(diaLetras2[dia] || 'Dia no definido');