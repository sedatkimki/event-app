import React from "react";

function IconContainer({ SVG }) {
  return (
    <div className="icon-container flex flex-jc-c flex-ai-c">
      <img src={SVG} alt="" />
    </div>
  );
}

export default IconContainer;
