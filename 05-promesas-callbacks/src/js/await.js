import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];

export const obtenerHeroesArr = async() => await Promise.all(heroesIds.map(buscarHeroe));