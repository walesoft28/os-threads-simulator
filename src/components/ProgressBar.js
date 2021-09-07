import React from "react";

const Progress_bar = ({ children }) => {
  const Parentdiv = {
    height: "10px",
    width: "100%",
    backgroundColor: "whitesmoke",
  };

  return <div style={Parentdiv}>{children}</div>;
};

export default Progress_bar;
