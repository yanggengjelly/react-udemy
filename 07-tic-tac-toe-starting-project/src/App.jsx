import Player from "./components/Player.jsx";

function App() {
  return (
    <mian>
      <div id="game-container">
        <ol id="players">
          <Player nmae="Player 1" symbol="X" />
          <Player nmae="Player 2" symbol="O" />
        </ol>
      </div>
    </mian>
  );
}

export default App;
