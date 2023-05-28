import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';


const Home = lazy(() => import("../pages/home/home"));
const Movies = lazy(() => import("../pages/movies/movies"));
const MovieDetails = lazy(() => import("../pages/movieDetails/movieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
    >
      <Routes>
        <Route path = '/' element ={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/movies/" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path='Cast' element ={<Cast/>} />
            <Route path='Reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
