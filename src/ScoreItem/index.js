import './index.css'

const ScoreItem = props => {
  const {Score, resetGame} = props

  return (
    <li className="score-bg">
      <div className="score-items">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="score-img"
        />
        <p className="score-para">YOUR SCORE</p>
        <h2 className="score-para">{Score}</h2>
        <button type="button" className="score-button" onClick={resetGame}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            className="reload"
            alt="reset"
          />
          <p className="button-para">PLAY AGAIN</p>
        </button>
      </div>
    </li>
  )
}

export default ScoreItem
