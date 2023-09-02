import { convertToRoman } from '../../utils/roman'
import './moviedetails.css'

type AppProps = {
    selectedMovie: any;
};

function MovieDetails ({ selectedMovie }: AppProps) {
    return (
        <div className="movie-details">
            {selectedMovie === null ? 
            (<h3 className="no-movie">No movie selected</h3>)
            : 
            (
                <div>
                    <h1>
                        Episode {convertToRoman(selectedMovie.episode_id)} -{' '}
                        {selectedMovie.title}
                    </h1>
                    <img className="movie-poster" src={selectedMovie.poster.data.Poster} alt="postername"></img>
                    <p className="movie-description">{selectedMovie.opening_crawl}</p>
                    <p>Directed by: {selectedMovie.director}</p>
                    <p>Average rating: {selectedMovie.starRatings}</p>
                    <span>{selectedMovie.ratingsSources}</span>
                </div>
            )}
        </div>
    )
}

export default MovieDetails