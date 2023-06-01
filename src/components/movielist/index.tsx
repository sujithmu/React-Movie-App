import Skeleton from "react-loading-skeleton";
import { convertToRoman } from "../../utils/roman";
import "./movielist.css";
import "react-loading-skeleton/dist/skeleton.css";

type AppProps = {
    movies: any;
    onMovieClick: any;
    loading: any
  };

function Movielist({ movies, onMovieClick, loading}: AppProps) {
    return (
        <div className="movie-list-container">
            {
                loading ? (
                    <Skeleton count={5} />
                )
                : 
                (
                <ul className="movie-list">
                    {
                        movies.map((movie: any) => 
                        (
                        <li className="movie-item" key={movie.title + movie.episode_id}>
                            <div
                                onClick={() => onMovieClick(movie)}
                                tabIndex={0}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter" || event.key === " ") {
                                        onMovieClick(movie);
                                    }
                                }}
                                aria-label={`Select ${movie.title}`}
                                role="button"
                                className="movie-item-div">
                                <span className="episode-number">
                                    EPISODE {movie.episode_id}
                                </span>
                                <span className="movie-title">
                                    Episode {convertToRoman(movie.episode_id)} - {movie.title}
                                </span>
                                <span className="movie-rating">
                                    {movie.starRatings}
                                </span>
                                <span className="release-date">
                                    {movie.release_date}
                                </span>
                            </div>
                        </li>
                        ))
                    }
                </ul>
                )
            }
        </div>
    );
}

export default Movielist;