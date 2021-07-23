import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { map } from 'ramda';
import React, { FC } from 'react';

import { Framework, FrameworkFeatureInfo, FrameworkInfoByFeatureId } from '../entities';
import { toStablePairs } from '../utils';
import { Criteria } from './Criteria';
import { Card, GroupTitle } from './utils';

const feature = (frameworkInfoByFeatureId: FrameworkInfoByFeatureId): FC<Framework> => ({
  frameworkId,
  frameworkName,
  frameworkFeaturesById,
}) => (
  <TableRow hover key={frameworkId}>
    <TableCell>{frameworkName}</TableCell>
    {map(([featureId, value]) => {
      // @ts-expect-error - TypeScript has no way to statically prove that then entry key matches the interface of the entry value but I know that it does because of the defined behavior of `Object.entries`.
      const children = frameworkInfoByFeatureId[featureId].toJsx(value);
      return (
        <TableCell key={featureId}>
          {children}
        </TableCell>
      );
    }, toStablePairs(frameworkFeaturesById))}
  </TableRow>
);

interface Props {
  frameworks: Framework[];
  frameworkInfo: FrameworkFeatureInfo[];
  frameworkInfoByFeatureId: FrameworkInfoByFeatureId;
}

const scrollId = 'FrameworkFeatures';

export const FrameworkFeatures: FC<Props> = ({
  frameworkInfo,
  frameworkInfoByFeatureId,
  frameworks,
}) => (
  <Card id={scrollId}>
    <GroupTitle scrollId={scrollId} title="Framework Features" />

    <Criteria
      items={map(({ criteria, name }) => [name, criteria], frameworkInfo)}
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
          {map(feature(frameworkInfoByFeatureId), frameworks)}
        </TableBody>
      </Table>
    </TableContainer>
  </Card>
);
