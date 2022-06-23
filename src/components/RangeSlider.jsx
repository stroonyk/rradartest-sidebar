import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

/*
* just a slider component that allows a user to select between two values
*/
const RangeSlider = (props) => {
  /*
  * this just enforces the sliders not crossing each other
  */
  const handleChange = (event, newValue, activeThumb) => {
      if (!Array.isArray(newValue)) {
        return;
      }    
      if (activeThumb === 0) {
        props.setValue([Math.min(newValue[0], props.value[1] - props.MIN_DISTANCE), props.value[1]]);
      } else {
        props.setValue([props.value[0], Math.max(newValue[1], props.value[0] + props.MIN_DISTANCE)]);
      }
  };

  return (
      <Box sx={{ width: 300,height:100 }} >
          {props.title}
          <Slider                  
              marks={props.marks}
              step={props.step}
              min={props.min}
              max={props.max}
              value={props.value}        
              onChange={handleChange}
              disableSwap
              sx={{
                  width: 280,                        
                  color: 'success.main',
                  '& .MuiSlider-markLabel': {
                  color: 'white',
                  fontSize:'0.675rem',
                  },
              }}
          />
      </Box>  
  )
 }

export default RangeSlider;