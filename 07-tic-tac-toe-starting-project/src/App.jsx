import Player from "./components/Player.jsx";

function App() {
  return (
    <mian>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
      </div>
    </mian>
  );
}

export default App;
