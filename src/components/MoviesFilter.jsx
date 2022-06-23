import { ProSidebar, SidebarHeader, SidebarContent  } from 'react-pro-sidebar';
import sidebarBg from '../assets/bg1.png';
import BudgetRangeSlider from './BudgetRangeSlider';
import RatingRangeSlider from './RatingRangeSlider';
import RuntimeRangeSlider from './RuntimeRangeSlider';
import DateFilter from './DateFilter';
import SelectVariant from './SelectVariant';
import NumberMoviesFilter from "./NumberMoviesFilter";

/*
* our sidebar component with all the filter components
*/
const MoviesFilter = (props) => {
    return (
        <ProSidebar image={sidebarBg}>
          <SidebarHeader>
            <div className="sidebar-div">Movie Filters</div>
          </SidebarHeader>
          <SidebarContent>
            <NumberMoviesFilter defaultNumberOfMovies={props.defaultNumberOfMovies}  numberOfMovies={props.uiNumberOfMovies} setNumberOfMoviesHandler={props.onNumberMoveiesSelected} clearMovies={props.onClearMoviesClicked}/>
            <DateFilter label='Date From' selectedDate={props.selectedStartDate} onSelectDate={props.onStartDateSelected} />
            <DateFilter label='Date To' selectedDate={props.selectedEndDate} onSelectDate={props.onEndDateSelected} />
            <BudgetRangeSlider value={props.selectedBudget} onSelectSlider={props.onBudgetSelected} />
            <RatingRangeSlider value={props.selectedRating} onSelectSlider={props.onRatingSelected} />
            <RuntimeRangeSlider value={props.selectedRuntime} onSelectSlider={props.onRuntimeSelected} /> 
            <SelectVariant items={props.genres} onSelectVariant={props.onGenreSelected} selectedValue={props.selectedGenre} label="Genre"/>
            <SelectVariant items={props.languages} onSelectVariant={props.onLanguageSelected} selectedValue={props.selectedLanguage} label="Language"/>
            <SelectVariant items={props.status} onSelectVariant={props.onStatusSelected} selectedValue={props.selectedStatus} label="Status"/>
          </SidebarContent>       
        </ProSidebar>       
    );
} 
export default MoviesFilter;