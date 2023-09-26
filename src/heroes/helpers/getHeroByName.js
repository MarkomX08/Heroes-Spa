import { heroes } from "../data/heroes";

export const getHeroByName = ( name = '' )=>{
    
    //se pasa el valor a un lowerCase, trim para evitar los espacios antes y despues del valor
    name = name.toLocaleLowerCase().trim();

    //condicional en caso de que el valor dado no tenga alguna longitud, retorno de un arreglo vacio
    if( name.length === 0 ) return [];

    //retorno de la filtracion de la data heroes mediante el valor proporcionado
    return heroes.filter(
        //conversion de la propiedad en lowercase y verificacion de que incluya el valor proporcionado dentro de la propiedad
        hero => hero.superhero.toLocaleLowerCase().includes( name )
    )
}