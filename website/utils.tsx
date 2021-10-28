import { Box, Card as MuiCard, Link, styled, Toolbar as MuiToolbar, Typography } from '@mui/material';
import { Check as MuiCheck, Close as MuiClose, HelpOutline, LinkSharp } from '@mui/icons-material';
import { map, pipe, prop, sortBy } from 'ramda';
import { FC, ReactNode, useState } from 'react';

import { SuperString } from '../components';
import { DesignKit, FrameworkFeaturesById } from '../frameworks';
import { noValue } from '../utils';
import { theme } from './theme';

export const scrollIntoView = (scrollId: string) => () => {
  let element = null;
  try {
    element = document.querySelector(`#${scrollId}`);
  } catch {}

  if (!element) {
    window.history.pushState('', '/', window.location.pathname);
    return;
  }

  window.parent.location.hash = scrollId;
  element.scrollIntoView();
};

export const LinkIcon = styled(LinkSharp)({
  cursor: 'pointer',
  fontSize: '1.25em',
  left: '-1em',
  opacity: 0.5,
  position: 'absolute',
  top: '15%',
  transform: 'rotate(-45deg)',
});

export const TitleSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  padding: '1em 0',
});

export const TitleWrapper = styled(Box)({
  '&:hover': {
    cursor: 'pointer',
  },
  alignItems: 'center',
  display: 'flex',
  position: 'relative',
});

export const Title = styled(Typography)({
  '&:hover': {
    cursor: 'pointer',
  },
});

export const Toolbar = styled(MuiToolbar)({
  paddingLeft: 24,
});

interface GroupTitleProps {
  actions?: ReactNode;
  scrollId: string;
  subtitle?: SuperString;
  title: string;
}

export const GroupTitle: FC<GroupTitleProps> = ({ title, scrollId, subtitle, actions }) => {
  const subtitleSection = subtitle !== undefined && (
    <Typography variant="subtitle2">
      {typeof subtitle === 'string' ? subtitle : subtitle.jsx}
    </Typography>
  );

  const [showLink, setShowLink] = useState(false);

  const onMouseEnter = () => {
    setShowLink(true);
  };

  const onMouseLeave = () => {
    setShowLink(false);
  };

  const onClick = scrollIntoView(scrollId);

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Toolbar>
        <TitleSection>
          <TitleWrapper onClick={onClick}>
            <Title onClick={onClick} variant="h5">{title}</Title>
            {showLink && <LinkIcon onClick={onClick} />}
          </TitleWrapper>
          {subtitleSection}
        </TitleSection>
        {actions}
      </Toolbar>
    </div>
  );
};

export const Check = styled(MuiCheck)({
  fill: 'green',
});

export const Close = styled(MuiClose)({
  fill: 'red',
});

export const checkmark = (value: boolean | undefined) => {
  if (value === undefined) {
    return <HelpOutline />;
  }

  if (value) {
    return <Check />;
  }
  return noValue;
  // return null;
};

export const stringArray = (sizes: string[] | null) => (sizes ? sizes.sort().join(', ') : noValue);

export const designKits = (designKits: FrameworkFeaturesById['designKits']) => (designKits === false ? checkmark(false) : (
  pipe<DesignKit[], DesignKit[], ReactNode[], ReactNode>(
    sortBy(prop('type')),
    map(({ href, type }) => (
      <Link href={href} key={type} sx={{ marginRight: 2 }}>{type}</Link>
    )),
    kits => <div key="kits">{kits}</div>,
  )(designKits)
));

export const themer = (themer: FrameworkFeaturesById['themer']) => (themer === false ? checkmark(themer) : (
  <Link href={themer as unknown as string}>Link</Link>
));

export const Card = styled(MuiCard)({
  margin: '2em',
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    paddingLeft: 0,
    paddingRight: 0,
  },
});
