import { Button, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { forEach, map } from 'ramda';
import { FC, Fragment, useEffect, useState } from 'react';

import { RepoInfo } from '../entities';
import { Framework as FrameworkType } from '../frameworks';
import { getRepoInfo, noValue, removeProtocol } from '../utils';
import { Card, GroupTitle } from './utils';

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

      <TableCell>{repoInfo?.stargazers_count?.toLocaleString() ?? noValue}</TableCell>
      <TableCell>{repoInfo?.forks_count?.toLocaleString() ?? noValue}</TableCell>
      <TableCell>{repoInfo?.open_issues_count?.toLocaleString() ?? noValue}</TableCell>
      <TableCell>{repoInfo?.license?.name?.replace(/ License/, '') ?? noValue}</TableCell>
    </TableRow>
  );
};

interface Props {
  frameworks: FrameworkType[];
}

const scrollId = 'FrameworkStatistics';

export const FrameworkStatistics: FC<Props> = ({ frameworks }) => {
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
