import React from 'react';

const Square = (props) => {
  return (
    <div
      style={{
        border: "2px solid black",
        height: "100px",
        width: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        cursor: "pointer",
        backgroundColor: 'bisque',
      }}
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
};

export default Square;
