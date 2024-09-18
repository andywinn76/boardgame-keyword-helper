
import './App.css'
import React, { useState } from 'react'
import Footer from './assets/components/Footer'
import KeywordList from './assets/components/KeywordList'
import Logo from './assets/components/Logo'
import SelectGame from './assets/components/SelectGame'

function App() {

  const [selectedGame, setSelectedGame] = useState(null)
  
  return (
    <main className='main'>
      <Logo />
      <SelectGame selectedGame={selectedGame} setSelectedGame={setSelectedGame} />
      <section className="keyword-item">
        <KeywordList gameName={selectedGame}/>    
      </section>
      <Footer />
    </main>
  )
}

export default App
