import React, { FC } from 'react';
import { map, forEach, pipe, flatten, groupBy, prop } from 'ramda';
import { noValue, toStablePairs, unwrapFrameworks } from './utils';
import { frameworks, frameworksById } from './frameworks';
import { Card as MuiCard, Typography, TableContainer, TableHead, TableRow, Table, TableCell, TableBody, Link, Button } from '@material-ui/core';
import { UnwrapedComponent, Component } from './entities';
import { componentInfoById } from './components';
import { withStyles } from '@material-ui/styles';
import { GroupTitle } from './common';
import { Criteria } from './Criteria';

const Card = withStyles({
  root: {
    margin: '2em',
  }
})(MuiCard);

const Component: FC<UnwrapedComponent> = ({
  componentId,
  componentName,
  frameworkId,
  componentURL,
  options,
}) => {
  const key = `${componentId}:${frameworkId}:${componentName}`;
  const { frameworkName } = frameworksById[frameworkId];

  return (
    <TableRow key={key} hover>
      <TableCell>{frameworkName}</TableCell>

      <TableCell>
        <Link href={componentURL}>{componentName}</Link>
      </TableCell>

      {map(([key, value]) => {
        const formattedValue = componentInfoById[componentId].optionsById[key].toJsx(value) || noValue;
        return (
          <TableCell key={key}>{formattedValue}</TableCell>
        );
      }, toStablePairs(options))}
    </TableRow>
  )
}

const ComponentGroup: FC<[string, UnwrapedComponent[]]> = ([componentId, components]) => {
  const { cannonicalName, description, optionsById } = componentInfoById[componentId];

  const options = toStablePairs(optionsById);

  const openAll = () => {
    forEach(({ componentURL, }) => {
      window.open(componentURL);
    }, components);
  };

  return (
    <Card key={componentId}>
      <GroupTitle
        title={cannonicalName}
        subtitle={description}
        actions={<Button onClick={openAll}>Open All In New Tabs</Button>}
      />

      <Criteria
        items={map(([key, value]) => (
          [value.name, value.criteria]
        ), options)}
      />

      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Framework</TableCell>

              <TableCell>Name</TableCell>

              {map(([key, value]) => (
                <TableCell key={key}>{value.name}</TableCell>
              ), options)}
            </TableRow>
          </TableHead>

          <TableBody>
            {map(Component, components)}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export const Components: FC = () => {
  const componentGroups = pipe(
    unwrapFrameworks,
    flatten,
    groupBy(prop('componentId')),
    toStablePairs,
    map(ComponentGroup),
  )(frameworks);

  return <>{componentGroups}</>;
}