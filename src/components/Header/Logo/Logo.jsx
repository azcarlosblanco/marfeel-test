import React from "react";

const Logo = ({
  imagePath,
  width,
  height,
  componentHeight,
  open,
  scrollTop
}) => {
  const wrapperStyle = {
    height: componentHeight,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
  };

  const wrapperOffsetStyles = {
    position: "absolute",
    width: "300px",
    background: "#CCCCCC",
    left: "-300px",
    transition: "0.5s",
    boxShadow: "4px 0px 6px -3px rgba(0, 0, 0, 0.3)"
  };

  const imgStyle = {
    maxHeight: componentHeight,
    height: componentHeight
  };

  if (open) {
    wrapperOffsetStyles.left = "0px";
  }

  return (
    <div
      style={
        scrollTop > 800
          ? { ...wrapperStyle, ...wrapperOffsetStyles }
          : wrapperStyle
      }
    >
      <img
        style={imgStyle}
        width={width}
        height={height}
        src={imagePath}
        alt="Logo"
      />
    </div>
  );
};

Logo.defaultProps = {
  imagePath: "/assets/marfeel_logo_rgb.svg",
  width: "",
  height: "",
  componentHeight: "70px"
};

export default Logo;
