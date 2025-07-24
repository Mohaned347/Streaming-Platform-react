import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/index';
import MoviesShows from './pages/Movie-Shows/movies';
import MoviesOpenPage from './pages/Movies-Open-Page/Movies-Open';
import ShowsOpenPage from './pages/Shows-Open-Page/Shows-Open';
import Subscription from './pages/Subscription/Subscription';
import Support from './pages/Support/Support';

function App() {
    return (
    <>
    <Support/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/MoviesShows" element={<MoviesShows/>} />
      <Route path="/MoviesOpenPage" element={<MoviesOpenPage/>} />
      <Route path="/ShowsOpenPage" element={<ShowsOpenPage/>} />
      <Route path="/Subscription" element={<Subscription/>} />
      <Route path="/Support" element={<Support/>} />
     </Routes>
    </>
    )
}

export default App
