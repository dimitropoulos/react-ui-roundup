import { Link, styled, Typography } from '@material-ui/core';
import { map } from 'ramda';
import { isEven, notEqual } from 'ramda-adjunct';
import { FC } from 'react';

import { componentInfo } from '../components';
import { tableOfContentsIntro } from '../copy';
import { createScrollId } from '../utils';
import { Card, GroupTitle } from './utils';

const scrollId = 'TableOfContents';

const TocWrapper = styled('ul')(({ theme: { spacing } }) => ({
  margin: `${spacing(2)} ${spacing(3)}`,
}));

const StyledLi = styled('li', { shouldForwardProp: notEqual('$indent') })<{ $indent: number }>(({ theme: { spacing }, $indent }) => ({
  display: 'flex',
  marginLeft: `${($indent - 1) * 12}px`,
  paddingBottom: spacing(0.25),
  paddingTop: spacing(0.25),
}));

const Bullet = styled(Typography)({
  fontSize: '1.2em',
  lineHeight: '1em',
  marginRight: '0.5em',
  marginTop: '0.1em',
});

const TocItem: FC<{ cannonicalName: string; indent: number }> = ({
  cannonicalName,
  indent,
}) => (
  <StyledLi $indent={indent}>
    <Bullet>{isEven(indent) ? '◦' : '•'}</Bullet>
    <Link href={`/#${createScrollId(cannonicalName)}`}>
      <Typography>{cannonicalName}</Typography>
    </Link>
  </StyledLi>
);

export const TableOfContents: FC = () => (
  <Card id={scrollId}>
    <GroupTitle
      scrollId={scrollId}
      title="React UI Roundup"
    />

    <Typography sx={{ mx: 3, my: 2 }}>{tableOfContentsIntro}</Typography>

    <TocWrapper>
      <Typography variant="h6">Table of Contents</Typography>
      <TocItem cannonicalName="Framework Statistics" indent={1} />
      <TocItem cannonicalName="Framework Features" indent={1} />
      <TocItem cannonicalName="Components" indent={1} />
      <ul>
        {map(({ cannonicalName, componentId }) => (
          <TocItem
            cannonicalName={cannonicalName}
            indent={2}
            key={componentId}
          />
        ), componentInfo)}
      </ul>
    </TocWrapper>
  </Card>
);
