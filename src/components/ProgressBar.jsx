function ProgressBar() {
  return (
    <div className="progress-bar">
      <span className="time-current">0:00</span>
      <input type="range" className="progress"/>
      <img src="" alt="" className="progress-thumb" />
      <span className="time-total">3:45</span>
    </div>
  )
}

export default ProgressBar