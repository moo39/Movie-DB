import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import { Container } from 'react-bootstrap';
import MoviesList from './Components/MoviesList';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetials from './Components/MovieDetials';

function App() {
  const [movies, setAllMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  //get all movies
  const fetchData = async () => {
    const res = await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ar&api_key=394827b4d1c833602ba4a13ace1b6a89')
    setAllMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }
  useEffect(() => {
    fetchData();
  }, [])
  // console.log(movies)

  //get current page
  const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ar&page=${page}&api_key=394827b4d1c833602ba4a13ace1b6a89`)
    setAllMovies(res.data.results)
    setPageCount(res.data.total_pages)

  }
  //to search in api
  const searchByName = async (searchValue) => {
    if (searchValue === "") {
      fetchData();
    } else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=394827b4d1c833602ba4a13ace1b6a89&query=${searchValue}&language=ar`);
      setAllMovies(res.data.results)
      setPageCount(res.data.total_pages)

    }
  }

  return (
    <div>
      <NavBar search={searchByName} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MoviesList movies={movies} getPage={getPage} pageCount={pageCount} />} />
            <Route path='/movie/:id' element={<MovieDetials />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
// https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=arS&api_key=394827b4d1c833602ba4a13ace1b6a89
