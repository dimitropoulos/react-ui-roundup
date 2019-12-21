import React, { FC } from 'react';
import { frameworks, frameworkInfo, frameworkInfoById } from './frameworks';
import { map } from 'ramda';
import { Framework } from './entities';
import { toStablePairs } from './utils';
import { Card as MuiCard, TableContainer, TableBody, TableHead, Table, TableRow, TableCell, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { GroupTitle } from './common';

const Card = withStyles({
  root: {
    margin: '2em',
  },
})(MuiCard);

const Feature: FC<Framework> = ({ frameworkFeaturesById, frameworkId, frameworkName }) => {
  return (
    <TableRow key={frameworkId} hover>
      <TableCell>{frameworkName}</TableCell>
      {map(([featureId, value]) => (
        <TableCell key={featureId}>
          {frameworkInfoById[featureId].toJsx(value)}
        </TableCell>
      ), toStablePairs(frameworkFeaturesById))}
    </TableRow>
  )
};

export const FrameworkFeatures: FC = () => {
  return (
    <Card>
      <GroupTitle>
        <Typography variant="h5">Framework Features</Typography>
      </GroupTitle>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              {map(({ featureId, name }) => (
                <TableCell key={featureId}>{name}</TableCell>
              ), frameworkInfo)}
            </TableRow>
          </TableHead>
          <TableBody>
            {map(Feature, frameworks)}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};