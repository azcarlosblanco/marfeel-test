import React, { Component } from "react";

export class Link extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  render() {
    const { path, content, componentHeight, colour, textSize, styles } = this.props;
    const { hover } = this.state;

    const linkStyles = {
      height: componentHeight,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      color: colour,
      fontSize: textSize,
      textDecoration: "none",
      borderBottom: "3px solid transparent"
    };

    if (hover) {
      linkStyles.borderBottom = "3px solid #d84445";
    }

    return (
      <a
        style={{...linkStyles, ...styles}}
        href={path}
        onMouseOver={() => this.setState({ hover: true })}
        onMouseOut={() => this.setState({ hover: false })}
      >
        {content}
      </a>
    );
  }
}

Link.defaultProps = {
  path: "#",
  content: "",
  componentHeight: "",
  colour: "#000000",
  textSize: "12px",
  styles: {}
};

export default Link;
