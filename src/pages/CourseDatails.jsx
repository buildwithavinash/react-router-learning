import { useNavigate, useParams } from "react-router-dom"
import { courses } from "../data/data";

const CourseDatails = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const course = courses.find(c => c.id === id);
    
    if(!course){
        return <h1>Course not found</h1>
    }

  return (
    <>
    <button onClick={()=> navigate(-1)}>Back</button>
    <h1>{course.title}</h1>
    <p>{course.description}</p>
    </>
  )
}

export default CourseDatails