import { useState, useEffect } from 'react'
import MovieDetails from '../components/moviedetails/index'
import MovieList from '../components/movielist/index'
import Search from '../components/search'
import Sort from '../components/sort'
import { sortMovies, searchMovies } from '../utils/filtermovies'
import './movie.css'

type AppProps = {
  movies: any;
  loading: any;
};

function Movie({ movies, loading }: AppProps) {
  const options = [
    { value: 'episode', label: 'Episode' },
    { value: 'year', label: 'Year' },
    { value: 'rating', label: 'Rating' },
  ]
  const [filteredMovies, setFilteredMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortType, setSortType] = useState('release_date')

  useEffect(() => {
    const handleFilterMovies = () => {
      const filterMovies = searchMovies(searchQuery, movies)
      const sortedMovies = sortMovies(sortType, filterMovies)
      setFilteredMovies(sortedMovies)
    }
    handleFilterMovies()
  }, [movies, searchQuery, sortType])

  const handleMovieClick = (movie: any) => {
    setSelectedMovie(movie)
  }

  const handleSearchChange = (query: any) => {
    setSearchQuery(query)
  }

  const handlerSortChange = (e: any) => {
    if (e && e.value) setSortType(e.value)
  }

  return (
    <div className="movie">
      <div className="filter-container">
        <Sort options={options} handlerSortChange={ handlerSortChange } />
        <Search
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
        />
      </div>
      <div className="movie-container">
        <MovieList
          movies={filteredMovies}
          onMovieClick={handleMovieClick}
          loading={loading}
        />
        <MovieDetails selectedMovie={selectedMovie} />
      </div>
    </div>
  )
}

export default Movie
