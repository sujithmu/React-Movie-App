export const searchMovies = (searchQuery: any, movies: any) => 
    movies.filter((movie: any) => 
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    export const sortMovies = (sortType: any, movies: any) => {
        if (sortType === "year") {
            return movies.sort((a: any, b: any) => {
                const aDate = new Date(a.release_date).valueOf();
                const bDate = new Date(b.release_date).valueOf();

                return aDate - bDate;
            });
        }
        if (sortType === "episode") {
            return movies.sort((a: any, b: any) => a.episode_id - b.episode_id);
        }
        if (sortType === "rating") {
            return movies.sort((a: any, b: any) => b.rateCalc - a.rateCalc);
        }
        return movies;
    }