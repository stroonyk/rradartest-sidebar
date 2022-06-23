 import movieData from "../assets/allmovies.json";

/*
* this just returns a filtered list of movies based on our parameters
*/
export const filterMoviesAsync = (genre, language, status, budget, rating, runtime, startdate, enddate, recordCount) => {

    // our callback
    return new Promise(resolve => {
        let filteredMovies = movieData;
        let found = false; 
        let myParsedArray = []; 

        // filter based on language
        if (language){
          filteredMovies = movieData.filter(movie => {
              found = false;
              myParsedArray = JSON.parse(movie.spoken_languages); 
              for(let i=0; i<myParsedArray.length; i++)
              {
                  if (myParsedArray[i].name === language)
                  {
                      found = true;
                      break;
                  }
              }
              return found;
          })
        }

        // filter based on status
        if (status){
          filteredMovies = filteredMovies.filter(movie => 
            movie.status === status
          ); 
        }

        // filter based on genre
        if (genre){
          filteredMovies = filteredMovies.filter(movie => 
            movie.genres.indexOf(genre) > -1
          ); 
        }

        // filter based on budget
        let budgetFrom = budget[0];
        let budgetTo = budget[1];
        filteredMovies = filteredMovies.filter(movie => {
          let movieBudget = movie.budget / 1000000;  
          return (movieBudget >= budgetFrom && movieBudget<= budgetTo); 
        }); 

        // filter based on rating
        let ratingFrom = rating[0];
        let ratingTo = rating[1];
        filteredMovies = filteredMovies.filter(movie =>       
            movie.vote_average >= ratingFrom && movie.vote_average <= ratingTo 
        ); 

        // filter based on runtime
        let runtimeFrom = runtime[0];
        let runtimeTo = runtime[1];
        filteredMovies = filteredMovies.filter(movie =>       
            movie.runtime >= runtimeFrom && movie.runtime <= runtimeTo 
        );    

        // filter based on start/end date
        if (startdate || enddate){
          let filterEndDate = enddate ? new Date(enddate).getTime() : new Date().getTime();
          let filterStartDate = startdate ? new Date(startdate).getTime() : null ;   
          filteredMovies = filteredMovies.filter(movie => {
            let releaseDate = new Date(movie.release_date).getTime();       
            if (filterEndDate && filterStartDate){
              return (releaseDate >= filterStartDate && releaseDate <= filterEndDate);   
            } else if (filterStartDate){
              return (releaseDate >= filterStartDate);  
            } else if (filterEndDate){
              return (releaseDate <= filterEndDate);  
            } else {  
              return false;
            }                
          })
        } 

        // cut down based on how many movies we want to show and return
        filteredMovies = filteredMovies.slice(0, recordCount)
        resolve(filteredMovies)
    })
}
  /*
  * we're going to loop round all the movies and find all the 
  * 1. Genres
  * 2. Languages
  * 3. Status's
  */ 
export const getMovieFilters = () => {
    let genres= [];
    let languages = [];
    let statuses = [];

    // loop round the movies
    movieData.forEach(object => {      
      
      // The genre array is saved in a string for some reason. 
      // Get it out and add to our genres array
      let myParsedArray = JSON.parse(object.genres);     
      myParsedArray.forEach(genresObject => {
        if (!genres.includes(genresObject.name)){
          genres.push(genresObject.name);
        }
      })
      
      // Spoken languages array is also saved as a string. Do the same as the genre array
      myParsedArray = JSON.parse(object.spoken_languages);
      if (myParsedArray){
      myParsedArray.forEach(languageObject => {
        if (!languages.includes(languageObject.name)){
          languages.push(languageObject.name);
        }
        })
      }

      // the status is just a string. 
      if (!statuses.includes(object.status)){
          statuses.push(object.status);
      }
            
    })

    // just return our arrays
    return {
        genres: genres,
        languages: languages,
        statuses: statuses
    }
}


