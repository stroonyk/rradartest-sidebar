import { Input,Icon } from 'semantic-ui-react';
import Box from '@mui/material/Box';

/*
* Our Number of Movies Filter. Does what it says on the tin :)
*/
const NumberMoviesFilter = (props) => {

    // show placeholder text depending on whether user has typed in a value or not
    let placeholderText = props.numberOfMovies ? '' : `Show ${props.defaultNumberOfMovies} Movies`;
    
    return (
      <Box sx={{ width: 300,height:70 }} >  
        <div style={{width:"150px",}} >Number Of Movies</div>
        <Input 
          value={props.numberOfMovies}
          type="number"  
          onChange={props.setNumberOfMoviesHandler}       
          placeholder={placeholderText}
          icon={<Icon name="delete" link onClick={props.clearMovies} />} 
        />    
      </Box>
    );
  }

  export default NumberMoviesFilter;