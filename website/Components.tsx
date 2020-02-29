import React, { FC, ReactElement, Fragment } from 'react';
import {
  append,
  flatten,
  forEach,
  groupBy,
  includes,
  intersperse,
  map,
  pipe,
  pluck,
  prop,
  reject,
  update,
} from 'ramda';
import {
  issueURL,
  noValue,
  toStablePairs,
  unwrapFrameworks,
} from '../utils';
import { frameworks, frameworksById } from '../frameworks';
import {
  Card as MuiCard,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableCell,
  TableBody,
  Box,
  Link,
  Button,
  Typography,
} from '@material-ui/core';
import { UnwrapedComponent, Component, Framework } from '../entities';
import { componentInfoById } from '../components';
import { withStyles } from '@material-ui/styles';
import { GroupTitle } from './utils';
import { Criteria } from './Criteria';

const Card = withStyles({
  root: {
    margin: '2em',
  }
})(MuiCard);

const Wrapper = withStyles({
  root: {
    backgroundColor: '#fafafa',
    padding: '1em',
  },
})(Box);

const pleaseFileIssue = (
  <Link
    target="_blank"
    rel="noopener noreferrer"
    href={issueURL}
  >
    Please file an issue
  </Link>
);

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
};

const MissingFramework: FC<Framework> = ({ frameworkId, frameworkName, repoURL }: Framework) => (
  <Link href={repoURL} key={frameworkId}>
    {frameworkName}
  </Link>
);

const MissingFrameworks: FC<{
  componentId: string;
  components: Component[];
}> = ({ componentId, components }) => {
  const { cannonicalName, indefiniteArticle } = componentInfoById[componentId];
  const missingFrameworks = pipe(
    pluck('frameworkId'),
    frameworkIds => reject(
      framework => includes(framework.frameworkId, frameworkIds),
      frameworks,
    ),
    map(MissingFramework),
    elements => intersperse<ReactElement | null | string>(', ', elements),
    elements => {
      switch (elements.length) {
        case 0:
          return [];

        case 1:
          return elements;

        case 3:
          return update(1, ' and ', elements)

        default:
          return update(elements.length - 2, ', and ', elements);
      }
    },
    elements => elements.length > 0 ? append<ReactElement | null | string>(
      <Fragment key="text">
        {' '}appear{elements.length === 1 ? 's' : ''} to be missing {indefiniteArticle} {cannonicalName} component. {pleaseFileIssue} if one now exists.
      </Fragment>,
      elements,
    ) : null,
  )(components);

  if (missingFrameworks === null) {
    return null;
  }

  return (
    <Wrapper>
      <Typography>
        {missingFrameworks}
      </Typography>
    </Wrapper>
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

      <MissingFrameworks
        componentId={componentId}
        components={components}
      />
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