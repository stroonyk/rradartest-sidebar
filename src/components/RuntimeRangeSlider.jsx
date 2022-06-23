import RangeSlider from "./RangeSlider";

const RUNTIME_MIN_DISTANCE = 20;

const RUNTIME_MARKS = [{value: 0,label: '0',},{value: 20,label: '20m',},{value: 40,label: '40m',},
    {value: 60,label: '60m',},{value: 80,label: '80m',},{value: 100,label: '100m',},
    {value: 120,label: '120m',},{value:140,label: '140m',},{value: 160,label: '160m',},
    {value: 180,label: '180m',},{value: 200,label: '200m',}];

const RuntimeRangeSlider = (props) => {

    return (
        <RangeSlider title="Runtime" marks={RUNTIME_MARKS} step={20} min={0} max={200} 
            value={props.value} setValue={props.onSelectSlider} MIN_DISTANCE={RUNTIME_MIN_DISTANCE} 
        />
    );
}

export default RuntimeRangeSlider;