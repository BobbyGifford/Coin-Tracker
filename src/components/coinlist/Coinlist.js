import React, { Component } from 'react';
import {
  Container,
  Header,
  Segment,
  Divider,
  Dimmer,
  Loader,
} from 'semantic-ui-react';
import axios from 'axios';

import Percentchanges from './Percentchanges';

class Cointlist extends Component {
  async componentDidMount() {
    const results = await axios.get(
      'https://api.coinmarketcap.com/v2/ticker/?structure=array&limit=20'
    );

    this.setState({ res: results.data.data });
  }

  componentDidUpdate() {
    console.log(this.state.res);
  }

  renderCoinList() {
    return this.state.res.map(coin => {
      return (
        <div key={coin.id}>
          <div>
            <Header as="h2" inverted icon textAlign="center">
              <Header.Content>
                #{coin.rank} {coin.name}
              </Header.Content>
            </Header>
            <Segment textAlign="center" inverted>
              {coin.symbol} - <i className="dollar sign icon" />
              {coin.quotes.USD.price}
              <Divider />
              <Header size="medium">Recent Changes</Header>
              <Percentchanges quotes={coin.quotes.USD} />
            </Segment>
          </div>
          <Divider />
        </div>
      );
    });
  }

  renderLoader() {
    return (
      <div>
        <Dimmer active>
          <Loader />
        </Dimmer>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Container>
          {this.state === null || this.state === undefined ? (
            <div>{this.renderLoader()}</div>
          ) : (
            <div>{this.renderCoinList()}</div>
          )}
        </Container>
      </div>
    );
  }
}

export default Cointlist;
