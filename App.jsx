import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import TodoList from './components/TodoList'
import MovieList from './components/MovieList'
import BookList from './components/BookList'
import './App.css'
import {Greeting, ArrowGreeting, ShinyButton} from './components/demo-1'
import { RainOrShine, Rainy } from './components/demo-2'
import {RainOrShiny} from './components/demo-3';
import { RainOrShines } from './components/demo-4'
// import ArrowGreeting from './components/demo-1'
// import ShinyButton from './components/demo-1'
import BibleQuiz, {ShowAnswers} from './components/BibleQuiz'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <Hello/>
      <Welcome/> */}
      {/* <TodoList />
      <MovieList />
      <BookList /> */}
      {/* <p>---------DEMO 1---------</p>
      <Greeting />
      <ArrowGreeting />
      <ShinyButton />
      <p>---------DEMO 2---------</p>
      <div>
      <RainOrShine isRainy = {true} />
    </div>
    <p>---------DEMO 3---------</p>
    <div>
      <RainOrShiny isRainy = {false} />
    </div>
    <p>---------DEMO 4---------</p> */}
    <div>
      {/* <RainOrShines isRainy = {false}
      testWord = {'Thrunder'} /> */}
      <BibleQuiz/>
    </div>
    </>
  )
}

export default App


