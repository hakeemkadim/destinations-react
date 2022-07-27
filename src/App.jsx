import { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Data from "./Data";

function App() {
  const [count, setCount] = useState(0)

  const cards = Data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
            
        />
    )
})   

  return (
    <div className="App">
      
      <Navbar/>
      <div className='cards'>
      {cards}
      </div>
      

    </div>
  )
}

export default App
