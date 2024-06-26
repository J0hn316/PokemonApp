import './details.css';

export default function Details(props) {
  return (
    <div className="Details">
      <h3>ABILITY LIST</h3> <br />
      <div className="move-list">
        {props.details.moves.map((move) => (
          <p key={move.move.name}>{move.move.name}</p>
        ))}
      </div>
      <h3>GAMES ENCOUNTERED IN</h3> <br />
      <div className="game-versions">
        {props.details.games.map((game) => (
          <p key={game.version.name}>{game.version.name}</p>
        ))}
      </div>
    </div>
  );
}
