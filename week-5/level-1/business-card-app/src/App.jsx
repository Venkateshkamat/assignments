import { useEffect, useState } from 'react'
import { BusinessCard } from './components/BusinessCard'

function App() {
  return (
    <div>
      <a href='/create'><button style={styles}>Create Card</button></a>
      <BusinessCard />
    </div>
  )
}

const styles = {
   marginTop: 20, 
   marginLeft: 20, 
   padding: 15, 
   width:440, 
   borderRadius: 8, 
   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
   backgroundColor: '#f64c72',
   fontSize: 20,
   "font-family": "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"
}
export default App


//do array for intrests in create todo
//do access limit from frontend