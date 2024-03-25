import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    //setIsEditing(!isEditing);
    //setIsEditing(!isEditing ? false : true);
    //(!isEditing) = isEditing가 true면 false를 반환하고 false면 true로 반환
    setIsEditing((editing) => !editing);
    // 이렇게 함수를 쓰면 상태 가 가장 최신 버전으로 유지되면서
    // 상태 변경 값 이전의 상태값을 기반으로 변경해야됨
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
