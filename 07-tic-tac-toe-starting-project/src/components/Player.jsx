import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);

  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    //setIsEditing(!isEditing);
    //setIsEditing(!isEditing ? false : true);
    //(!isEditing) = isEditing가 true면 false를 반환하고 false면 true로 반환
    setIsEditing((editing) => !editing);
    // 이렇게 함수를 쓰면 상태 가 가장 최신 버전으로 유지되면서
    // 상태 변경 값 이전의 상태값을 기반으로 변경해야됨
  }

  function handleChange(event) {
    // console.log(event.target.value);
    setPlayerName(event.target.value);
    // input 태그의 이벤트는 change변화시 함수를 불러온다 매게변수는 자동으로 입력
    // target은 이벤트를 방출한 요소를 참조하게 된다. ex <input>요소
    // value 는 이 속성은 이용자가 작성하려고 한 값을 저장한다. 그후 value로 덮어짐
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = "Edit";

  if (isEditing === true) {
    // defaultValue 특수한 속성값
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
