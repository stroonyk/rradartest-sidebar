import React, { useEffect, useState } from 'react';
import MoviesFilter from "../components/MoviesFilter";
import { Segment } from "semantic-ui-react";
import MovieList from "../components/MovieList";
import {filterMoviesAsync, getMovieFilters } from '../services/movieService';

/*
* our main movie search component
*/
const MovieSearch = () => {
    const DEFAULT_NUMBER_OF_MOVIES = 200;
    const [numberOfMovies, setNumberOfMovies] = useState(DEFAULT_NUMBER_OF_MOVIES);
    const [uiNumberOfMovies,setUINumberOfMovies] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedBudget, setSelectedBudget] = useState([0, 350]);
    const [selectedRating, setSelectedRating] = useState([0, 10]);
    const [selectedRuntime, setSelectedRuntime] = useState([0, 180]);
    const [selectedStartDate, setSelectedStartDate] = useState(); 
    const [selectedEndDate, setSelectedEndDate] = useState();
    const [genres,setGenres] = useState([]);
    const [languages,setLanguages] = useState([]);  
    const [statuses,setStatus] = useState([]);
    const [movies, setMovies] = useState([]);

  /*
  * Get our filters from the movieService
  */
  useEffect(() => {
    // get our filters
    let filters = getMovieFilters();

    // assign them to our states for our dropdowns
    setGenres(filters.genres);
    setLanguages(filters.languages);
    setStatus(filters.statuses);
  },[]);

  /*
  * Get our movies based on our filters
  */
  useEffect(() => {
    const search = async () => {
        let movies = await filterMoviesAsync(selectedGenre, selectedLanguage, selectedStatus,
         selectedBudget,selectedRating,selectedRuntime,selectedStartDate,selectedEndDate,numberOfMovies);
        setMovies(movies)
    }
    search()
  }, [selectedGenre, selectedLanguage, selectedStatus,selectedBudget,selectedRating,selectedRuntime,selectedStartDate,selectedEndDate,numberOfMovies])
/*
* all our change handlers
*/
  const onNumberMoviesChangeHandler = e => {
    let number = e.currentTarget.value ? e.currentTarget.value : DEFAULT_NUMBER_OF_MOVIES;
    setUINumberOfMovies(e.currentTarget.value);
    setNumberOfMovies(number);
  }
  const clearMoviesEventHandler = () => {
    console.log('here');
    setUINumberOfMovies('');
    setNumberOfMovies(DEFAULT_NUMBER_OF_MOVIES);
  }
  const handleStartDateSelected = (value) => {
    setSelectedStartDate(value)
  }
  const handleEndDateSelected = (value) => {
    setSelectedEndDate(value)
  }
  const handleBudgetSelected = (value) => {
    setSelectedBudget(value)
  }
  const handleRatingSelected = (value) => {
    setSelectedRating(value)
  }
  const handleRuntimeSelected = (value) => {
    setSelectedRuntime(value)
  }
  const handleGenreSelected = (e) => {
    setSelectedGenre(e.target.value)
  }
  const handleLanguageSelected = (e) => {
    setSelectedLanguage(e.target.value)
  }
  const handleStatusSelected = (e) => {
    setSelectedStatus(e.target.value)
  }
/*
* using a lot of prop drilling for state management across components
* probably best to use context with a reducer custom hooks?
*/
return (
    <>
        <MoviesFilter 
          genres={genres}
          languages={languages}
          status={statuses}
          selectedGenre={selectedGenre}
          selectedLanguage={selectedLanguage}
          selectedStatus={selectedStatus}
          selectedBudget={selectedBudget}
          selectedRuntime={selectedRuntime}
          selectedRating={selectedRating}
          selectedStartDate={selectedStartDate}
          selectedEndDate={selectedEndDate}
          defaultNumberOfMovies={DEFAULT_NUMBER_OF_MOVIES}
          uiNumberOfMovies={uiNumberOfMovies}
          onClearMoviesClicked={clearMoviesEventHandler}
          onNumberMoveiesSelected={onNumberMoviesChangeHandler}
          onStartDateSelected={handleStartDateSelected}
          onEndDateSelected={handleEndDateSelected}
          onRuntimeSelected={handleRuntimeSelected}
          onRatingSelected={handleRatingSelected}
          onBudgetSelected={handleBudgetSelected}
          onGenreSelected={handleGenreSelected}
          onLanguageSelected={handleLanguageSelected}
          onStatusSelected={handleStatusSelected} 
        />
        <Segment className="outer-div" textAlign="center">
          <MovieList movies={movies}  />
        </Segment>
    </>
);

}

export default MovieSearch;