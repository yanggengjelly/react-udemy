import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(!isEditing);
    //setIsEditing(!isEditing ? false : true);
    // (!isEditing) = isEditing가 true면 false를 반환하고 false면 true로 반환
  }

  let playerName = <span className="player-name">{name}</span>;
  // let btnCaption = "Edit";

  if (isEditing === true) {
    playerName = <input type="text" required value={name} />;
    // btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
