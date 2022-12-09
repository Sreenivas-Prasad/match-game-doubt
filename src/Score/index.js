import './index.css'

const Score = props => {
  const {score, resetGame} = props

  return (
    <div className="score-bg">
      <div className="score-items">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="score-img"
        />
        <h2 className="score-para">YOUR SCORE</h2>
        <h2 className="score-para">{score}</h2>
        <button type="button" className="score-button" onClick={resetGame}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            className="reload"
            alt="reset"
          />
          <p className="button-para">PLAY AGAIN</p>
        </button>
      </div>
    </div>
  )
}

export default Score
