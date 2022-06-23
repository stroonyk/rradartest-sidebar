import { Input} from 'semantic-ui-react';
import Box from '@mui/material/Box';

/*
* Out Date Filter. Does what it says on the tin :)
*/
const DateFilter = (props) => {
    return (
      <Box sx={{ width: 300,height:70 }} >  
        <div style={{width:"100px",}} >{props.label}</div>
        <Input
          type="date" 
          onChange={(date) => {
            props.onSelectDate(date.target.value);
          }}   
        />
      </Box>
    )
  }
  
  export default DateFilter;