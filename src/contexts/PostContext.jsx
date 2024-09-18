import { createContext, useEffect, useState } from "react";

export let PostsContext = createContext();

const PostContainer = ({ children }) => {
  let [postList, setPostList] = useState([]);

  const getPost = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    setPostList(data);
  };

  useEffect(() => {
    getPost();
  }, []);

  let contextValue = {
    postList,
  };

  return (
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostContainer;
