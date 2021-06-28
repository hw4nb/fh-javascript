// import { init } from "./js/chistes-page";
// import { init } from './js/usuarios-page'

import * as CRUD from './js/crud-provider';

// CRUD.getUsuario(2).then(console.log);

// CRUD.crearUsuario({
//   name: 'Yobel',
//   job: 'Dancer'
// }).then(console.log);

CRUD.actualizarUsuario(1, {
  name: 'Rocio',
  job: 'Singer'
}).then(console.log);