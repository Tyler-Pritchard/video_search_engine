import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../../Components/GoogleAuth";
import {
  Button,
  Container,
  Image,
  Menu,
  Responsive,
  Visibility
} from "semantic-ui-react";
import { getWidth } from "./Navbar";
export class DesktopContainer extends Component {
  state = {};
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Menu
            id="navbar"
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
          >
            <Container id="navContainer">
              <Menu.Item>
                <Link to="/">
                  <Image id="navLogo" src="logo.png" />
                </Link>
              </Menu.Item>

              <Menu.Item id="navItem">
                <Link to="/">Text</Link>
              </Menu.Item>

              <Menu.Item id="navItem">
                <Link to="/">Text</Link>
              </Menu.Item>

              <Menu.Item id="navItem">
                <Link to="/">Text</Link>
              </Menu.Item>

              <Menu.Item id="navButtons" position="right">
                <Button inverted={!fixed}>
                  <Link to="/login">Log in</Link>
                </Button>
                <Button
                  inverted={!fixed}
                  primary={fixed}
                  style={{ marginLeft: "0.5em" }}
                >
                  <Link to="/userprofile">Sign Up</Link>
                </Button>
              </Menu.Item>
              <Menu.Item position="right">
                {" "}
                <GoogleAuth />{" "}
              </Menu.Item>
            </Container>
          </Menu>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}
