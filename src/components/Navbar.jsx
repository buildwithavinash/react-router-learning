import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav style={{display: "flex", gap: "8px"}}>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
    </nav>

  )
}

export default Navbar