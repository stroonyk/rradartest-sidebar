
import DetailedMovie from "../components/DetailedMovie";
import {useParams} from 'react-router'
/*
* This is our detailed movie wrapper
*/
const DetailedMovieWrapper = () => {
    let {id} = useParams();
    return (
      <DetailedMovie id={id} />
    )
  }
export default DetailedMovieWrapper;