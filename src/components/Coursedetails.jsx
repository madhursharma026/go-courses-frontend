import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom';

function Coursedetails() {
    let {course_id}=useParams();
    let {desc}=useParams();
    return(
        <div> 
    <h1> course details {course_id}</h1>
    <h1>  course descr {desc}</h1>
    </div>

    
    );
}

export default Coursedetails