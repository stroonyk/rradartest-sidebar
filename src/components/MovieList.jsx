import { Card } from "semantic-ui-react";
import MovieCard from "./MovieCard";

/*
* Our MoviesList component. Just a wrapper for mapping the movies to the MovieCard
*/
const MovieList = (props) => {
    return (
      <Card.Group textAlign="center">
       { props.movies && props.movies.map(movie => 
          <MovieCard
            movie={movie}
            movieId={movie.id}
            key={movie.id}
        />)}
       </Card.Group>
    );
  }

  export default MovieList;