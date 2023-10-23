import "./styles.css";
import PlayerName from "../../components/PlayerName";
import VSPlayer from "../../VsPlayer";

function ScoreBoard() {
  return `
    <header class="score-board">
      ${PlayerName("Player1")}
      ${VSPlayer()}
      ${PlayerName("Player2")}
    </header>
  `;
}

export default ScoreBoard;
