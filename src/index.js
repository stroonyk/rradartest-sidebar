import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import MovieDetails from "./Pages/MovieDetails"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MovieSearch from './Pages/MovieSearch';
import 'react-pro-sidebar/dist/css/styles.css';

/*
*   App control now with Routing options
*/
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<MovieSearch />}></Route>
        <Route  path='/DetailedMovie/:id' element={<MovieDetails />}></Route>
      </Routes>
    </div>
  )
}
/*
* Introducing a router for when clicking on the movie card
*/
ReactDOM.render((
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  ),
  (document.querySelector("#root"))
);
