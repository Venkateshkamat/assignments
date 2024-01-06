import { useEffect, useState } from 'react'
import { BusinessCard } from './components/BusinessCard'

function App() {

  const [bCard,setbCard] = useState([])

  useEffect(()=>{
      fetch("http://localhost:3000/cards").then(async (res)=>{
      const json = await res.json()
      setbCard(json.cards);
      })
  },[]);
  


  return (
    <div>
      <BusinessCard bCard = {bCard} />
    </div>
  )
}

export default App
