import './styles/App.css'
import Counter from './components/Counter'
import PostItem from './components/PostItem'

function App() {

  return (
    <>
      <div>
        <Counter></Counter>
        <PostItem post={{id:1, title: 'Javascript', body: 'Description'}}/>
      </div>
    </>
  )
}

export default App
