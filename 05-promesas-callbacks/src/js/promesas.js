const heroes = {
  capi: {
    nombre: 'Capitan America',
    poder: 'Aguantar inyecciones sin morir',
  },
  iron: {
    nombre: 'Ironman',
    poder: 'Absurda cantidad de dinero',
  },
  spider: {
    nombre: 'Spiderman',
    poder: 'Tirar telarañas'
  }
}

export const buscarHeroe = (id) => {

  const heroe = heroes[id];

  return new Promise((resolve, reject) => {

    if(heroe) {
      resolve(heroe);
    } else {
      reject(`No existe un heroe con el id ${id}`);
    }

  });

}