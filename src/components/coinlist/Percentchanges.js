import React from 'react';
import { Icon, Grid } from 'semantic-ui-react';

const checkForNegatives = val => {
  if (val < 0) {
    return <Icon name="angle down" />;
  } else {
    return <Icon name="angle up" />;
  }
};

const Percentchanges = props => {
  return (
    <Grid columns="three" divided>
      <Grid.Row>
        <Grid.Column>
          <span style={{ marginRight: '1rem' }}>Last Hour: </span>
          {checkForNegatives(props.quotes.percent_change_1h)}
          {props.quotes.percent_change_1h}
          <Icon name="percent" />
        </Grid.Column>
        <Grid.Column>
          <span style={{ marginRight: '1rem' }}>Last Day: </span>
          {checkForNegatives(props.quotes.percent_change_24h)}
          {props.quotes.percent_change_24h}
          <Icon name="percent" />
        </Grid.Column>
        <Grid.Column>
          <span style={{ marginRight: '1rem' }}>Last Week: </span>
          {checkForNegatives(props.quotes.percent_change_7d)}
          {props.quotes.percent_change_7d}
          <Icon name="percent" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Percentchanges;
