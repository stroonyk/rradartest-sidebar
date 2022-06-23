
import React,{useState,useEffect} from 'react';
import movieData from "../assets/allmovies.json";
import { Divider, Card, Image, Segment  } from "semantic-ui-react";
import { faker } from "@faker-js/faker";

/*
* Our Detailed Movie Component showing more data than the MovieCard
*/
const DetailedMovie = (props) => {
  /*
  * saving the movie to our state
  */
  const [movie,setMovie] = useState([]);
  /*
  * get the movie data
  */
  useEffect(() => {
    let id = parseInt(props.id);
    setMovie(movieData.find(mymovie => {
      return (mymovie.id === id);
    }));
  },[]);

  return (        
      <Segment className="outer-div" textAlign="center" >
            <Card className="centered detailed-card" >
              <Card.Content>
                <Image floated="left" size="large" src={faker.image.cats(450, 450, true)} />
                <Card.Header>{movie.title}</Card.Header>
                <Card.Meta> {movie.tagline}</Card.Meta>
                <Divider />
                <Card.Meta>{movie.overview}</Card.Meta>
                <Divider />
                <Card.Meta>Release Date : <strong>{movie.release_date}</strong></Card.Meta>
                <Card.Meta>Budget : <strong>{parseFloat(movie.budget / 1000000).toFixed(0)}</strong>M</Card.Meta>
                <Card.Meta>Revenue : <strong>{parseFloat(movie.revenue / 1000000).toFixed(0)}</strong>M</Card.Meta>
                <Card.Meta>Runtime : <strong>{parseFloat(movie.runtime / 60).toFixed(2)}</strong>Hours</Card.Meta>
                <Card.Meta>Rating : <strong>{movie.vote_average}</strong></Card.Meta>
                <Card.Meta>Vote Count : <strong>{movie.vote_count}</strong></Card.Meta>
                <Card.Meta>URL : <a href={movie.homepage} >{movie.homepage}</a></Card.Meta>
              </Card.Content>
            </Card>
      </Segment>
    )
}

export default DetailedMovie