import "./styles/App.css";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import { useRef, useState } from "react";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Post 1", body: "Description" },
    { id: 2, title: "Post 2", body: "Description 2" },
    { id: 3, title: "Post 3", body: "Description 3" },
  ]);

  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({ title: "", body: "" });
    
  };

  return (
    <>
      <div className="App">
        <Counter />
        <PostItem post={{ id: 1, title: "Javascript", body: "Description" }} />
        <PostList posts={posts} title="Post List 1" />
        <form>
          <MyInput
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            type="text"
            placeholder="Post Name"
          />
          <MyInput
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
            type="text"
            placeholder="Post Description"
          />
          <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
      </div>
    </>
  );
}

export default App;
