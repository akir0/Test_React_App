import "./styles/App.css";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import { useMemo, useRef, useState } from "react";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Post 2a", body: "Description 1e" },
    { id: 2, title: "Post 1b", body: "Description 2f" },
    { id: 3, title: "Post 3c", body: "Description 3g" },
  ]);

const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(() => {
    console.log("func worked");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

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
        <hr style={{ margin: "15px 0" }} />
        <PostFilter filter={filter} setFilter={setFilter} />
        <PostList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title="Post List 1"
          />
      </div>
    </>
  );
}

export default App;
