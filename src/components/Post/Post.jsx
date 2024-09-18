import React, { useContext } from "react";
import { PostsContext } from "../../contexts/PostContext";
import "./Post.css";
import { FixedSizeList as List } from "react-window";

const Post = () => {
  let { postList } = useContext(PostsContext);

  const Row = ({ index, style }) => {
    const post = postList[index];
    return (
      <div style={style} className="post-container">
        <h2>{post.title}</h2>
      </div>
    );
  };

  return (
      <List
        height={600}
        itemCount={postList.length}
        itemSize={100}
        width={1300}
      >
        {Row}
      </List>
  );
};

export default Post;
