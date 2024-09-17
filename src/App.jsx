import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProtectedRoutes from "./utils/ProtectedRoutes";
// import CourseAuthor from "./components/CourseAuthor/CourseAuthor";
// import CourseList from "./components/CourseList/CourseList";
//import Courses from './components/Courses/Courses';
// import Home from './components/Home/Home'
// import About from './components/About/About'
// import Contact from './components/Contact/Contact'

const Home = React.lazy(() => import("./components/Home/Home"));
const About = React.lazy(() => import("./components/About/About"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));
const Courses = React.lazy(() => import("./components/Courses/Courses"));
const CourseList = React.lazy(() =>
  import("./components/CourseList/CourseList")
);
const CourseAuthor = React.lazy(() =>
  import("./components/CourseAuthor/CourseAuthor")
);

const App = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/courses" element={<Courses />}>
              <Route index element={<CourseList />} />
              <Route path="courseauthor" element={<CourseAuthor />} />
            </Route>
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
