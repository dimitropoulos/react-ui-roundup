import React, { FC, useState, useEffect, Fragment } from 'react';
import { frameworks } from '../frameworks';
import { map, forEach } from 'ramda';
import { Framework as FrameworkType, RepoInfo } from '../entities';
import { getRepoInfo, removeProtocol, noValue } from '../utils';
import { TableContainer, TableBody, TableHead, Table, TableRow, TableCell, Link, Button } from '@material-ui/core';
import { GroupTitle, Card } from './utils';

const Framework: FC<FrameworkType> = ({
  frameworkName: name,
  frameworkId,
  frameworkHomepage,
  repoURL,
}) => {
  const [repoInfo, setRepoInfo] = useState<RepoInfo | null>(null);

  useEffect(() => {
    getRepoInfo(repoURL)
      .then(setRepoInfo)
      .catch(() => {});
  }, [repoURL]);

  return (
    <TableRow hover key={frameworkId}>
      <TableCell>{name}</TableCell>

      <TableCell>
        <Link href={frameworkHomepage}>{removeProtocol(frameworkHomepage)}</Link>
      </TableCell>

      <TableCell>
        <Link href={repoURL}>
          {removeProtocol(repoURL)}
        </Link>
      </TableCell>

      <TableCell>{repoInfo?.stargazers_count.toLocaleString() ?? noValue}</TableCell>
      <TableCell>{repoInfo?.forks_count.toLocaleString() ?? noValue}</TableCell>
      <TableCell>{repoInfo?.open_issues_count.toLocaleString() ?? noValue}</TableCell>
      <TableCell>{repoInfo?.license.name.replace(/ License/, '') ?? noValue}</TableCell>
    </TableRow>
  );
};

export const FrameworkStatistics: FC = () => {
  const openAll = (type: 'homepages' | 'repositories') => () => {
    forEach(({ frameworkHomepage, repoURL }) => {
      if (type === 'homepages') {
        window.open(frameworkHomepage);
      }

      if (type === 'repositories') {
        window.open(repoURL);
      }
    }, frameworks);
  };

  const scrollId = 'FrameworkStatistics';

  return (
    <Card id={scrollId}>
      <GroupTitle
        actions={(
          <Fragment>
            <Button onClick={openAll('homepages')}>Open All Homepages</Button>
            <Button onClick={openAll('repositories')}>Open All Repositories</Button>
          </Fragment>
        )}
        scrollId={scrollId}
        title="Framework Statistics"
      />
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Homepage</TableCell>
              <TableCell>Repository</TableCell>
              <TableCell>Stars</TableCell>
              <TableCell>Forks</TableCell>
              <TableCell>Issues</TableCell>
              <TableCell>License</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {map(Framework, frameworks)}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};
