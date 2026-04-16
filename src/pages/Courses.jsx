import { courses } from "../data/data";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div>
      <h1>Courses</h1>

      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.title}</h3>
          <Link to={`/courses/${course.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
