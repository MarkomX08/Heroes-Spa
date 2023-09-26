import { heroes } from '../data/heroes';

export const getHeroesByPublisher = ( publisher ) => {
    
    // arreglo con los publisher validos
    const validPublishers = ['DC Comics', 'Marvel Comics'];

    // condicional para verificar si el publisher enviado no existe en el arreglo de validos
    if (!validPublishers.includes(publisher)){
        // en caso de que no enviar un msj
        throw new Error (`${publisher} no existe el publisher`);
    }

    //retorno de los datos filtrados mediante una propiedad
    return heroes.filter( heroe => heroe.publisher === publisher );
}