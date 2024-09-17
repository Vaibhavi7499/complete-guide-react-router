import React from 'react';
import "./CourseAuthor.css";
import {NavLink, Outlet } from 'react-router-dom';

const CourseAuthor = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/courses/courseauthor">Course author child</NavLink></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default CourseAuthor