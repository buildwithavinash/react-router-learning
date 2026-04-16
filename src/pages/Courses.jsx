import { courses } from "../data/data";
import { Link, Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <div style={{display: "flex", gap: "40px"}}>

      <div>
      <h1>Courses</h1>

      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.title}</h3>
          <Link to={course.id}>View Details</Link>
        </div>
      ))}
      </div>


      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Courses;
