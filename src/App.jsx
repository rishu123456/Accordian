import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/Accordian'
import StarRating from './components/StarRating'

function App() {
 

  return (
    <div>
    {/* {<Accordian></Accordian>}   */}
       <StarRating numberOfStars={5}/>
    </div>
  )
}

export default App
