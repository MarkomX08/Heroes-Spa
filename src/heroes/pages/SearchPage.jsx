import { useLocation, useNavigate } from "react-router-dom";
import queryString  from "query-string";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import { getHeroByName } from "../helpers";

export const SearchPage = () => {

  //obtenemos informacion de la navegacion
  const navigate = useNavigate();
  
  //obtenemos informacion de la localizacion
  const location = useLocation();

  const {q = '' } = queryString.parse( location.search );

  //variable que ocupa el helper de getHeroByName
  const heroes = getHeroByName(q);

  const showSearch = q.length === 0;
  const showError = (q.length > 0) && heroes.length === 0;


  //uso del custom Hook
  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  //funcion de la extraccion del input searchText
  const onSearchSubmit = ( event ) =>{

    event.preventDefault();
    //condicional en caso de que el valor de input sea menor a tal
    // if( searchText.trim().length <= 1) return;

    //navegacion hacia la pagina buscada
    navigate( `?q=${ searchText }`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">

        <div className="col-5">

          <h4>Searching</h4>
          <hr />

          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>

          </form>

        </div>

        <div className="col-7">

          <h4>Results</h4>
          <hr />

          {/* {
            (q === '')
            ?
            <div className="alert alert-primary">search a hero </div>
            : (heroes.length === 0 ) 
            && <div className="alert alert-danger">No hero with <b>{ q }</b> </div>
          } */}

          <div className="alert alert-primary animate__animated animate__fadeIn" 
            style={{ display: showSearch ? '' : 'none' }}>
            search a hero 
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn" 
            style={{ display: showError ? '' : 'none' }}>
            No hero with <b>{ q }</b> 
          </div>
          {
            heroes.map( hero => (
              <HeroCard key={ hero.id } { ...hero } />
            ))
          }
        </div>

      </div>
    </>
  )
}
