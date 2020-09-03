import React, { FC, useState, useEffect } from 'react';
import { frameworks } from '../frameworks';
import { map, forEach } from 'ramda';
import { Framework } from '../entities';
import { getRepoInfo, removeProtocol, noValue, SHOULD_FETCH } from '../utils';
import { Card as MuiCard, TableContainer, TableBody, TableHead, Table, TableRow, TableCell, Link, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { GroupTitle } from './utils';

const Card = withStyles({
  root: {
    margin: '2em',
  },
})(MuiCard);

const Framework: FC<Framework> = ({ frameworkName: name, frameworkId, frameworkHomepage, repoURL }: Framework) => {
  const [repoInfo, setRepoInfo] = useState<any | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const repoInfo = await getRepoInfo(repoURL);
      setRepoInfo(repoInfo);
    }
    fetchData();
  }, [repoURL]);

  return (
    <TableRow key={frameworkId} hover>
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
  )
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
        scrollId={scrollId}
        title="Framework Statistics"
        actions={(
          <>
            <Button onClick={openAll('homepages')}>Open All Homepages</Button>
            <Button onClick={openAll('repositories')}>Open All Repositories</Button>
          </>
        )}
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