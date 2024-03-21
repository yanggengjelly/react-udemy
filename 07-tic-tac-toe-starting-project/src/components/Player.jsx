import { useState } from "react";

export default function Player({ nmae, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  return (
    <li>
      <span className="player">
        <span className="player-name">{nmae}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}
