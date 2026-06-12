import './App.css'
import TitleBar from './components/TitleBar'
import Artwork from './components/Artwork'
import PlayerControls from './components/PlayerControls'
import ProgressBar from './components/ProgressBar'

function App() {

  return (
    <div className="player-window">
      <TitleBar />
      <Artwork />
      <PlayerControls />
      <ProgressBar />
    </div>
  )
}

export default App
