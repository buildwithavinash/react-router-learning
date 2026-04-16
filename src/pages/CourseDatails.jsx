import { useParams } from "react-router-dom"
import { courses } from "../data/data";

const CourseDatails = () => {

    const { id } = useParams();

    const course = courses.find(c => c.id === id);
    
    if(!course){
        return <h1>Course not found</h1>
    }

  return (
    <>
    <h1>{course.title}</h1>
    <p>{course.description}</p>
    </>
  )
}

export default CourseDatails