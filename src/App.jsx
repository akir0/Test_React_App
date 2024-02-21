import './styles/App.css'
import Counter from './components/Counter'
import PostItem from './components/PostItem'
import PostList from './components/PostList'
import { useState } from 'react'

function App() {
const [posts, setPosts] = useState([
  {id:1, title:'Post 1', body:'Description'},
  {id:2, title:'Post 2', body:'Description 2'},
  {id:3, title:'Post 3', body:'Description 3'},
])
  return (
    <>
      <div className='App'>
    <Counter/>
    <PostItem post={{id:1, title:'Javascript', body: 'Description'}}/>
    <PostList posts={posts} title='Post List 1'/>
    
    
      </div>
    </>
  )
}

export default App
