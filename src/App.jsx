import './App.css'
import { useState } from 'react'
import TitleBar from './components/TitleBar'
import Artwork from './components/Artwork'
import PlayerControls from './components/PlayerControls'
import ProgressBar from './components/ProgressBar'
import testeAudioFile from './assets/teste.mp3'


const testeAudio = new Audio(testeAudioFile)  


function App() {
  
  const [isPlaying, setIsPlaying] = useState(false)

  function togglePlay() {
  if (isPlaying === false) {   // 1. eu LEIO o valor atual
    testeAudio.play()
    setIsPlaying(true)          // 2. eu MUDO o valor pra true
  } else {
    testeAudio.pause()
    setIsPlaying(false)         // 2. eu MUDO o valor pra false
  }
}
  
  return (
    <div className="player-window">
      <TitleBar />
      <Artwork />
      <PlayerControls aoClicarPlay={togglePlay} isPlaying={isPlaying} />
      <ProgressBar />
      {/* <img src={} alt="" className="border-overlay" /> */}
    </div>
  )
}

export default App
