import React from "react";

const Greet = (props) => {
  const { name, imageName } = props;
  return (
    <div>
      <h1>
        Hello {name} and {imageName}
      </h1>
      {/* {props.children} */}
    </div>
  );
};

export default Greet;
