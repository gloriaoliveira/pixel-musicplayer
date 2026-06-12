function PlayerControls() {
  return (
    <div className="player-controls">
        <div className="album-cover"></div>
        <div className="song-title">Song Title</div>
        <div className="player-btns">
            <button>⏮️</button>   {/* anterior */}
            <button>⏯️</button>   {/* play/pause */}
            <button>⏭️</button>   {/* próximo */}
        </div> 
    </div>
  )
}

export default PlayerControls