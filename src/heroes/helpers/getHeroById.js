import { heroes } from "../data/heroes"

export const getHeroesById = (id) => {

    //retorna un elemento identico al id enviado
    return heroes.find( hero => hero.id === id);
    
}