import { Link } from 'react-router-dom';

//funcion para la comparacion de dos elementos, se uso para verificar si el alter ego y el characters son identicos, evitar el muestreo de los characters
const CharactersByHero = ( {alter_ego, characters}) => {
    //condicional si los elementos son identicos retornar un fragmento
    if ( alter_ego === characters) return (<></>);

    // retorno de los characters en caso de que no sea validada la condicional anterior
    return <p>{characters}</p>
}

export const HeroCard = ( {id, superhero, alter_ego, first_appearance, characters} ) => {

    //enrutamiento de la imagen mediante su id
    const heroImageUrl = `/assets/heroes/${ id }.jpg`;

    // const charactersByHero = (<p>{characters}</p>);

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ heroImageUrl } className="card-img" alt={ superhero }/>
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                                {
                                    // (alter_ego !== characters ) && charactersByHero
                                }

                                <CharactersByHero characters={ characters } alter_ego={ alter_ego }/>
                            

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${ id }`}>
                                Más ...
                            </Link>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
