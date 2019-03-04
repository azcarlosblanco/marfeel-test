import React, { Component } from "react";
import Background from "./Background/Background";
import Logo from "./Logo/Logo";
import SectionMenu from "./SectionMenu/SectionMenu";
import BurgerIcon from "./BurgerIcon/BurgerIcon";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollTop: 0,
      open: false
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    const scrollTop = window.pageYOffset;
    this.setState({ scrollTop });
  }

  handleOnClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { scrollTop, open } = this.state;
    const { costumization } = this.props;

    if (!costumization) {
      return null;
    }

    return (
      <Background colour={costumization.background.colour}>
        {scrollTop > 400 && (
          <BurgerIcon
            colour={costumization.burgerIcon.colour}
            background={costumization.background.colour}
            open={open}
            scrollTop={scrollTop}
            onClick={this.handleOnClick}
          />
        )}
        <Logo
          width={costumization.logo.width}
          height={costumization.logo.height}
          imagePath={costumization.logo.imagePath}
          open={open}
          scrollTop={scrollTop}
        />
        <SectionMenu
          open={open}
          scrollTop={scrollTop}
          background={costumization.background.colour}
          colour={costumization.sectionMenu.colour}
          items={costumization.sectionMenu.items}
          textSize={costumization.sectionMenu.textSize}
        />
      </Background>
    );
  }
}
