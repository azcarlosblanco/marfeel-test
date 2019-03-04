import React from "react";
import Link from "../Link/Link";

const SectionMenu = ({
  componentHeight,
  colour,
  background,
  textSize,
  items,
  scrollTop,
  open
}) => {
  const navStyles = {
    display: "flex",
  };

  const navOffsetStyles = {
    position: "absolute",
    width: "300px",
    height: "100vh",
    background,
    left: "-300px",
    transition: "0.5s",
    //TODO: FIX
    top: "70px",
    boxShadow: '4px 0px 6px -3px rgba(0, 0, 0, 0.3)'
  };

  if (open) {
    navOffsetStyles.left = "0px";
  }

  return (
    <nav style={scrollTop > 400 ? navOffsetStyles : navStyles}>
      {items.length &&
        items.map((item, index) => (
          <Link
            key={index}
            path="#"
            componentHeight={componentHeight}
            colour={colour}
            textSize={textSize}
            content={item}
          />
        ))}
    </nav>
  );
};

SectionMenu.defaultProps = {
  componentHeight: "30px",
  colour: "",
  textSize: ""
};

export default SectionMenu;
