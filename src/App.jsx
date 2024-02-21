import "./styles/App.css";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import { useRef, useState } from "react";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Post 1", body: "Description" },
    { id: 2, title: "Post 2", body: "Description 2" },
    { id: 3, title: "Post 3", body: "Description 3" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <>
      <div className="App">
        <Counter />
        <PostItem post={{ id: 1, title: "Javascript", body: "Description" }} />

        <PostForm create={createPost} />
        {posts.length !== 0 ? (
          <PostList remove={removePost} posts={posts} title="Post List 1" />
        ) : (
          <h1 style={{ textAlign: "center" }}>Posts Not Found</h1>
        )}
      </div>
    </>
  );
}

export default App;
