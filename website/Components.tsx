import {
  Box,
  Button,
  Link,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import {
  append,
  flatten,
  forEach,
  groupBy,
  includes,
  intersperse,
  map,
  pipe,
  prop,
  reject,
  update,
} from 'ramda';
import React, { FC, Fragment, ReactElement, ReactNode } from 'react';
import { Entry } from 'type-fest';

import { componentInfoById } from '../components';
import { Framework, UnwrapedComponent } from '../entities';
import {
  createScrollId,
  issueURL,
  noValue,
  toStablePairs,
  unwrapFrameworks,
} from '../utils';
import { Criteria } from './Criteria';
import { Card, GroupTitle } from './utils';

const Wrapper = styled(Box)({
  backgroundColor: '#fafafa',
  padding: '1em',
});

const pleaseFileIssue = (
  <Link
    href={issueURL}
    rel="noopener noreferrer"
    target="_blank"
  >
    Please file an issue
  </Link>
);

const Component: FC<UnwrapedComponent> = ({
  componentId,
  componentName,
  frameworkInfo: {
    frameworkId,
    frameworkName,
  },
  componentURL,
  options,
}) => {
  const valueCells = map<Entry<typeof options>, ReactNode>(entry => {
    const [optionId, value] = entry;
    const componentInfo = componentInfoById[componentId];
    const option = componentInfo.optionsById[optionId];
    const cellValue = option.toJsx(value) ?? noValue;

    return (
      <TableCell key={optionId}>{cellValue}</TableCell>
    );
  }, toStablePairs(options));

  const key = `${componentId}:${frameworkId}:${componentName}`;
  return (
    <TableRow hover key={key}>
      <TableCell>{frameworkName}</TableCell>

      <TableCell>
        <Link href={componentURL}>{componentName}</Link>
      </TableCell>

      {valueCells}
    </TableRow>
  );
};

const MissingFramework: FC<Framework> = ({ frameworkId, frameworkName, repoURL }: Framework) => (
  <Link href={repoURL} key={frameworkId}>
    {frameworkName}
  </Link>
);

const MissingFrameworks: FC<{
  componentId: string;
  components: UnwrapedComponent[];
  frameworks: Framework[];
}> = ({ componentId, components, frameworks }) => {
  const { cannonicalName, indefiniteArticle } = componentInfoById[componentId];

  const missingFrameworks = pipe(
    () => components,
    map(({ frameworkInfo: { frameworkId } }) => frameworkId),
    frameworkIds => reject(
      framework => includes(framework.frameworkId, frameworkIds),
      frameworks,
    ),
    map(MissingFramework),
    elements => intersperse<ReactElement | string | null>(', ', elements),
    elements => {
      switch (elements.length) {
        case 0:
          return [];

        case 1:
          return elements;

        case 3:
          return update(1, ' and ', elements);

        default:
          return update(elements.length - 2, ', and ', elements);
      }
    },
    elements => (elements.length > 0 ? append<ReactElement | string | null>(
      <Fragment key="text">
        {' '}appear{elements.length === 1 ? 's' : ''} to be missing {indefiniteArticle} {cannonicalName} component. {pleaseFileIssue} if one now exists.
      </Fragment>,
      elements,
    ) : null),
  )();

  if (missingFrameworks === null) {
    return null;
  }

  return (
    <Wrapper>
      <Typography>
        {missingFrameworks}
      </Typography>
    </Wrapper>
  );
};

const componentGroup = (frameworks: Framework[]): FC<[string, UnwrapedComponent[]]> => ([componentId, components]) => {
  const { cannonicalName, description, optionsById } = componentInfoById[componentId];

  const options = toStablePairs(optionsById);

  const openAll = () => {
    forEach(({ componentURL }) => {
      window.open(componentURL);
    }, components);
  };

  const scrollId = createScrollId(cannonicalName);

  return (
    <Card id={scrollId} key={componentId}>
      <GroupTitle
        actions={<Button onClick={openAll}>Open All In New Tabs</Button>}
        scrollId={scrollId}
        subtitle={description}
        title={cannonicalName}
      />

      <Criteria
        items={map(([, value]) => (
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
        frameworks={frameworks}
      />
    </Card>
  );
};

interface Props {
  frameworks: Framework[];
}

export const Components: FC<Props> = ({ frameworks }) => {
  const componentGroups = pipe(
    () => frameworks,
    unwrapFrameworks,
    flatten,
    groupBy(prop('componentId')),
    (x: any) => toStablePairs(x) as [string, UnwrapedComponent[]][],
    map(componentGroup(frameworks)),
  )();

  return <Fragment key="components">{componentGroups}</Fragment>;
};
