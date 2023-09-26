import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroesById } from '../helpers';
import { useMemo } from 'react';

export const HeroPage = () => {

  //hook que extrae los parametros
  const { id } = useParams();

  const navigate = useNavigate();

  //variable que almacena la funcion
  const hero = useMemo( ()=> getHeroesById( id ),[ id ]) ;

  //funcion para el regreso de la vista anterior
  const onNavigateBack = () => {
    navigate(-1);
  }

  //condicional en caso de que el heroe no exista
  if ( !hero ) {
    //retorno a una pagina en caso de que no exista el heroe
    return <Navigate to="/marvel" />
  }

  return (
    <div className='row mt-5 animate__animated animate__fadeInLeft'>
      <div className="col-4">
        <img 
        src={`/assets/heroes/${id}.jpg`} 
        alt={ hero.superhero } 
        className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3>{ hero.superhero }</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego</b> {hero.alter_ego}</li>
          <li className='list-group-item'><b>Publisher</b> {hero.publisher}</li>
          <li className='list-group-item'><b>first appearance</b> {hero.first_appearance}</li>
        </ul>
        <h5 className='list-group-item'> Characters </h5>
        <p>{hero.characters}</p>

        <button 
          className='btn btn-outline-primary'
          onClick={ onNavigateBack }
        >
          Regresar
        </button>
      </div>
    </div>
  )
}
