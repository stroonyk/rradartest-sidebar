import { Icon, Button, Card, Image } from "semantic-ui-react";
import React,{useState} from "react";
import { faker } from "@faker-js/faker";
/*
* Our main MovieCard component. 
*/
const MovieCard = ({movie,movieId}) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [movieImage, setMovieImage] = useState(faker.image.cats(250, 250, true))
  /*
  * handle the liked and disliked buttons being clicked using state
  */
  const handleLiked = () => {
      setLiked((currentState) => !currentState);  
      setDisliked(false);
  }
  const handleDisliked = () => {
      setDisliked((currentState) => !currentState);  
      setLiked(false);
  }   

  // get the genres for the movie
  let genreString = '';
  let genres = JSON.parse(movie.genres);     
  genres.forEach(item => {
    genreString += item.name + ', ';
    }
  )
  genreString = genreString.slice(0,-2);

  // get the languages for the movie
  let languagesString = '';
  let languages = JSON.parse(movie.spoken_languages);     
  languages.forEach(item => {
    languagesString += item.name + ', ';
    }
  )
  languagesString = languagesString.slice(0,-2);
  /*
  * clicking on the movie will link to the DetailedMovie component using the id
  * clicking on the like/unlike buttons changes their color
  */
  return (
    <Card className="centered" >      
        <Card.Content href={`DetailedMovie/${movieId}`}>
          <Image floated="right" size="tiny" src={movieImage} />
          <div className="card-top">
            <Card.Header>{movie.title}</Card.Header>
            <Card.Meta> {movie.tagline}</Card.Meta>
          </div>
          <div className="card-left">
            <Card.Description>Release Date : <strong>{movie.release_date}</strong></Card.Description>
            <Card.Description>Budget : <strong>{parseFloat(movie.budget / 1000000).toFixed(0)}</strong>M</Card.Description>
            <Card.Description>Rating : <strong>{movie.vote_average}</strong></Card.Description>
            <Card.Description>Runtime : <strong>{movie.runtime}</strong> minutes</Card.Description>
            <Card.Description>Status : <strong> {movie.status}</strong> </Card.Description>
            <Card.Description>Genres : <strong> {genreString}</strong> </Card.Description>
            <Card.Description>Languages : <strong> {languagesString}</strong> </Card.Description>
          </div>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button className={`ui green button ${liked ? '' : 'basic'}`} onClick={handleLiked} >
                <Icon name="thumbs up" />
                Like
            </Button>
            <Button className={`ui red button ${disliked ? '' : 'basic'}`} onClick={handleDisliked} > 
              Dislike
              <Icon name="thumbs down" />
            </Button>
          </div>
        </Card.Content>
      </Card>
  );
}

export default React.memo(MovieCard);
//export default MovieCard;