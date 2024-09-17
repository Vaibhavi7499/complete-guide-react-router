import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import "./Courses.css";

const Courses = () => {
  let path = useLocation();

  return (
    <>
      <nav className="navbar-course">
        <ul>
          <li className={path.pathname === "/courses" ? "active" : ""}>
            <Link to="/courses">Course List</Link>
          </li>
          <li>
            <NavLink to="courseauthor">Course Author</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Courses;
