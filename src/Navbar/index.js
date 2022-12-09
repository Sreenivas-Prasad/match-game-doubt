import './index.css'

const Navbar = props => {
  const {score, secs} = props
  return (
    <nav className="nav-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="nav-logo"
      />
      <div className="score">
        <p className="nav-para1">Score:{score}</p>
        <div className="countdown">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
            alt="timer"
            className="timer"
          />
          <p className="time">{secs} sec</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
