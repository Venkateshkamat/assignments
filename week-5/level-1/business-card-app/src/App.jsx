import { useState } from 'react'
import './App.css'
import { BusinessCard } from './components/BusinessCard'

function App() {
  const [bCard,setbCard] = useState([{
    name: "venki",
    description:"Hi I am learning reactjs",
    links:"https://github.com/Venkateshkamat/",
    interests:"Volleyball"
  },
  {
    name: "chikks",
    description:"I'm a chikoo",
    links:"https://github.com/chiko1401",
    interests:"Bunnies"
  }])

  return (
    <div>
      <BusinessCard bCard = {bCard} />
    </div>
  )
}

export default App
