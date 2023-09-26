import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DCPage, MarvelPage, SearchPage, HeroPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className='container'>
        {/* rutas de navegacion entre paginas */}
        <Routes>
            <Route path="marvel" element={<MarvelPage/>} />
            <Route path="dc" element={<DCPage/>} />

            <Route path="search" element={<SearchPage/>} />
            <Route path="hero/:id" element={<HeroPage/>} />

            {/* ruta en la que retorna en caso de no encontrarla */}
            <Route path="/" element={<Navigate to={"/marvel"} />} />
        </Routes>
      </div>  
    </>
  )
}
