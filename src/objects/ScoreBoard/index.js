import "./styles.css";
import PlayerName from "../../components/PlayerName";
import VSPlayer from "../../VsPlayer";
import PlayerScore from "../../components/PlayerScore";

function ScoreBoard() {
  return `
    <header class="score-board">
      ${PlayerName("Player1")}
      ${PlayerScore(1)}
      ${VSPlayer()}
      ${PlayerScore(2)}
      ${PlayerName("Player2")}
    </header>
  `;
}

export default ScoreBoard;
