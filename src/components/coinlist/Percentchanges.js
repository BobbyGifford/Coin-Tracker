import React, { Component } from 'react';
import { Icon, Grid, Button, Header } from 'semantic-ui-react';

class Percentchanges extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showChanges: false,
    };
    this.toggleChanges = this.toggleChanges.bind(this);
    this.checkForNegatives = this.checkForNegatives.bind(this);
  }

  toggleChanges() {
    this.setState({ showChanges: !this.state.showChanges });
    console.log(this.state.showChanges);
  }

  checkForNegatives(val) {
    if (val < 0) {
      return <Icon name="angle down" color="red" />;
    } else {
      return <Icon name="angle up" color="green" />;
    }
  }

  render() {
    return (
      <div>
        <Button
          content={this.state.showChanges ? 'Hide Changes' : 'Show Changes'}
          inverted
          color="violet"
          onClick={this.toggleChanges}
        />
        {this.state.showChanges ? (
          <div>
            <div style={{ marginTop: '1rem', marginBottom: '.5rem' }}>
              <Header inverted size="medium">
                Recent Changes
              </Header>
            </div>
            <Grid columns="three" divided>
              <Grid.Row>
                <Grid.Column>
                  <span style={{ marginRight: '1rem' }}>Last Hour: </span>
                  {this.checkForNegatives(this.props.quotes.percent_change_1h)}
                  {this.props.quotes.percent_change_1h}
                  <Icon name="percent" />
                </Grid.Column>

                <Grid.Column>
                  <span style={{ marginRight: '1rem' }}>Last Day: </span>
                  {this.checkForNegatives(this.props.quotes.percent_change_24h)}
                  {this.props.quotes.percent_change_24h}
                  <Icon name="percent" />
                </Grid.Column>

                <Grid.Column>
                  <span style={{ marginRight: '1rem' }}>Last Week: </span>
                  {this.checkForNegatives(this.props.quotes.percent_change_7d)}
                  {this.props.quotes.percent_change_7d}
                  <Icon name="percent" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Percentchanges;
