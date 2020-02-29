import React, { FC } from 'react';
import { map } from 'ramda';
import { Typography, Box, withStyles, Chip as MuiChip } from '@material-ui/core';

const Wrapper = withStyles({
  root: {
    margin: 16,
  },
})(Box);

const Title = withStyles({
  root: {
    marginBottom: 8,
  },
})(Typography);

const Row = withStyles({
  root: {
    marginBottom: 8,
  },
})(Box);

const Chip = withStyles({
  root: {
    marginRight: 4,
  },
})(MuiChip);

interface Props {
  items: [string, string][];
}

export const Criteria: FC<Props> = ({ items }) => (
  <Wrapper>
    <Title variant="h6">Criteria</Title>
    {map(([name, description]) => (
      <Row key={name}>
        <Chip label={name} size="small" />
        <Typography component="span">{description}</Typography>
      </Row>
    ), items)}
  </Wrapper>
)