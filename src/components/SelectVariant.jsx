import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

/*
* Just a dropdown list. Populate list with the props array which are the filter options
*/
const SelectVariant = (props) => {
  
    // create the select items from the array
    let selectItems = [];
    props.items.forEach(item => {      
      selectItems.push(<MenuItem key={item} value={item}>{item}</MenuItem>);
    })
    return (
      <Box sx={{ width: 280,height:80 }} >
        <FormControl sx={{ m: 1, minWidth: 250,}}>
          <InputLabel id="demo-simple-select-standard-label">{props.label}</InputLabel>
          <Select sx={{backgroundColor:'white'}}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={props.selectedValue}
            onChange={props.onSelectVariant}
            label={props.label}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {selectItems}
          </Select>
        </FormControl>
      </Box>
    );
  }
  
  export default SelectVariant;