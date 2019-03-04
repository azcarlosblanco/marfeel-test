import React, { Component } from "react";

export default class BurgerIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  getLineStyle(index) {
    return {
      position: "absolute",
      height: "20%",
      left: 0,
      right: 0,
      top: 20 * (index * 2) + "%",
      opacity: this.state.hover ? 0.6 : 1
    };
  }

  render() {
    const {
      barClassName,
      className,
      componentHeight,
      onClick,
      colour,
      background
    } = this.props;

    let buttonStyles = {
      position: "absolute",
      width: "50%",
      height: "50%",
      border: "none",
      fontSize: 0,
      background: "transparent",
      cursor: "pointer"
    };

    const burgerBottomStyles = {
      position: "fixed",
      width: "40px",
      height: "35px",
      left: "36px",
      top: componentHeight,
      zIndex: 1000,
      transform: "translateY(-50%)",
      background: background,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%"
    };

    const burgerBarStyles = {
      background: colour
    };

    if (this.state.hover) {
      burgerBarStyles.background = "#a90000";
    }

    let icon = (
      <span>
        {[0, 1, 2].map(bar => (
          <span
            key={bar}
            className={`${barClassName}`.trim()}
            style={{
              ...burgerBarStyles,
              ...this.getLineStyle(bar)
            }}
          />
        ))}
      </span>
    );

    return (
      <div style={burgerBottomStyles} className={`${className}`.trim()}>
        <button
          onClick={onClick}
          onMouseOver={() => this.setState({ hover: true })}
          onMouseOut={() => this.setState({ hover: false })}
          style={buttonStyles}
        >
          {icon}
        </button>
      </div>
    );
  }
}

BurgerIcon.defaultProps = {
  barClassName: "",
  className: "",
  componentHeight: "35px"
};
