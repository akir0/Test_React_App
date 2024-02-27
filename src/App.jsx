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
import MyModal from "./components/UI/MyModal/MyModal";
import {CSSTransition, TransitionGroup} from "react-transition-group"
import { usePosts } from "./hooks/usePosts";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Post 2a", body: "Description 1e" },
    { id: 2, title: "Post 1b", body: "Description 2f" },
    { id: 3, title: "Post 3c", body: "Description 3g" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <>
      <div className="App">
        <Counter />
        <PostItem post={{ id: 1, title: "Javascript", body: "Description" }} />
        <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>Create user post</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
        </MyModal>
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
