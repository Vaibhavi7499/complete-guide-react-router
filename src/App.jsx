import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Post from "./components/Post/Post";
import CssLayout from "./components/CssLayout/CssLayout";
// import { NameContext } from "./contexts/NameContext";
// import PageNotFound from "./components/PageNotFound/PageNotFound";
// import CourseAuthorChild from "./components/courseAuthorChild/CourseAuthorChild";
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
const CourseAuthorChild = React.lazy(()=>import("./components/courseAuthorChild/CourseAuthorChild"));
const PageNotFound = React.lazy(()=>import("./components/PageNotFound/PageNotFound"));

const CourseList = React.lazy(() =>
  import("./components/CourseList/CourseList")
);
const CourseAuthor = React.lazy(() =>
  import("./components/CourseAuthor/CourseAuthor")
);

const App = () => {

//   let obj ={
// name:"cocsit college"
//   }

  return (
    <div>
      {/* <NameContext.Provider value={obj}> */}
      <Navbar />
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/courses" element={<Courses />}>
              <Route index element={<CourseList />} />
              <Route path="courseauthor" element={<CourseAuthor />} >
              <Route index element={<CourseAuthorChild/>}/>
              </Route>
            </Route>
          <Route path="/post"  element={<Post/>}/>
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound/>} />
          <Route path="/csslayout" element={<CssLayout/>} />
        </Routes>
      </Suspense>
      {/* </NameContext.Provider> */}
    </div>
  );
};

export default App;
