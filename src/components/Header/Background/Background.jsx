import React from "react";

const Background = ({ colour, gradient, children }) => {
  const headerStyles = {
    backgroundColor: colour,
    position: "fixed",
    zIndex: 999
  };

  if (gradient) {
    headerStyles.backgroundImage = `linear-gradient(90deg, ${colour} 0%, ${gradient} 100%)`;
  }

  return <header style={headerStyles}>{children}</header>;
};

Background.defaultProps = {
  colour: "#FFFFFF",
  gradient: ""
};

export default Background;
