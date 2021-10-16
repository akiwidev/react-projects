import React from "react";

// props aka properties, allows our React components to be more flexible!

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("h3", {}, props.animal),
//     React.createElement("h3", {}, props.breed),
//   ]);
// };

// The code below is JSX (JavaScript XML). Instead of putting JavaScript into HTML, JSX allows us to put HTML into JavaScript. It is a syntax extension of React, and allows us to directly write HTML in React. When run through babel it will output the same code as above ☝️
const Pet = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.animal}</h3>
      <h3>{props.breed}</h3>
    </div>
  );
}

export default Pet;
