import React, { FC } from 'react';
import { frameworks, frameworkInfo, frameworkInfoById } from '../frameworks';
import { map } from 'ramda';
import { Framework } from '../entities';
import { toStablePairs } from '../utils';
import { TableContainer, TableBody, TableHead, Table, TableRow, TableCell } from '@material-ui/core';
import { GroupTitle, Card } from './utils';
import { Criteria } from './Criteria';


const Feature: FC<Framework> = ({ frameworkFeaturesById, frameworkId, frameworkName }) => (
  <TableRow hover key={frameworkId}>
    <TableCell>{frameworkName}</TableCell>
    {map(([featureId, value]) => (
      <TableCell key={featureId}>
        {frameworkInfoById[featureId].toJsx(value)}
      </TableCell>
    ), toStablePairs(frameworkFeaturesById))}
  </TableRow>
);

export const FrameworkFeatures: FC = () => {
  const scrollId = 'FrameworkFeatures';
  return (
    <Card id={scrollId}>
      <GroupTitle scrollId={scrollId} title="Framework Features" />

      <Criteria
        items={map(([, value]) => (
          [value.name, value.criteria]
        ), toStablePairs(frameworkInfoById))}
      />

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
