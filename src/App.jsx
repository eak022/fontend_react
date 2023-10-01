import { useState } from 'react'
import './App.css'
import data from './data'
import List from './List'

function App() {
  const [people, setpeople] = useState(data);
  const clearAll = () =>{
    setpeople([])
  }
  return (
    <>
        <div>
        <h1>Wrkshop1:Birth List Project</h1>
        <h2>Eakkachai 022</h2>
        <main>
          <section className="container">
            <h2>{people.length} birthdays today </h2>
            <List people = {people}/>
            <button onClick={clearAll}>Clear All</button>
          </section>
        </main>
        
        </div>
    </>
  )
}

export default App
