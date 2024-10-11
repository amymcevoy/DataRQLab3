import MovieItem from "./movieItem";

//Added movie component
const Movies = (props) => {
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem myMovie={movie}/>
        }
    );
};

export default Movies;