function PlayerControls() {
  return (
    <div className="player-controls">
        <div className="album-cover"></div>
        <span className="now-playing">Now playing...</span>
        <div className="song-title">Song Title</div>
        <div className="artist-name">Artist Name</div>
        <div className="player-btns">
            <button>⏮️</button>   {/* anterior */}
            <button>⏯️</button>   {/* play/pause */}
            <button>⏭️</button>   {/* próximo */}
        </div> 
    </div>
  )
}

export default PlayerControls