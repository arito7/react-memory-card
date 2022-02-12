import './Score.css';

const Score = (props) => {
  return (
    <div className="score-container">
      <div className="score-wrapper">
        <p className="score">{`Score: ${props.score.score}`}</p>
        <p className="high-score">{`High score: ${props.score.currentHighest}`}</p>
      </div>
    </div>
  );
};

export default Score;
