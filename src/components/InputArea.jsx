import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.handleEntry} type="text" value={props.text} />
      <button onClick={props.addNote}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
