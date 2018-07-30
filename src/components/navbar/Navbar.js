import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';

class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <Menu pointing secondary size="large" inverted>
        <Container>
          <Menu.Item header>Coin Tracker</Menu.Item>
          {/* <Menu.Item
          name="aboutUs"
          active={activeItem === 'aboutUs'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="jobs"
          active={activeItem === 'jobs'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="locations"
          active={activeItem === 'locations'}
          onClick={this.handleItemClick}
        /> */}
        </Container>
      </Menu>
    );
  }
}

export default Navbar;
