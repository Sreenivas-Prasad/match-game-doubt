import './index.css'

const Navbar = props => {
  const {Score, secs} = props
  return (
    <nav className="nav-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="nav-logo"
      />
      <ul className="score">
        <p className="nav-para1">Score: {Score}</p>
        <div className="countdown">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
            alt="timer"
            className="timer"
          />
          <p className="time">{secs} sec</p>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
