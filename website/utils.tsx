import React, { ReactNode, FC, useState } from 'react';
import { withStyles, Box, Link, Typography, Toolbar } from "@material-ui/core";
import { HelpOutline, Check as MuiCheck, Close as MuiClose, LinkSharp } from '@material-ui/icons';
import { pipe, sortBy, prop, map } from 'ramda';
import { DesignKit, FrameworkFeaturesById, SuperString } from '../entities';
import { noValue } from '../utils';

export const scrollIntoView = (scrollId: string) => () => {
  let element = null;
  try {
    element = document.querySelector(`#${scrollId}`);
  } catch {}
  
  if (!element) {
    window.history.pushState('', '/', window.location.pathname);
    return;
  }

  parent.location.hash = scrollId;
  element.scrollIntoView();
}

export const LinkIcon = withStyles({
  root: {
    opacity: 0.5,
    cursor: 'pointer',
    left: '-1em',
    top: '15%',
    transform: 'rotate(-45deg)',
    position: 'absolute',
    fontSize: '1.25em',
  }
})(LinkSharp);

export const TitleSection = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: '1em 0',
  },
})(Box);

export const TitleWrapper = withStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    '&:hover': {
      cursor: 'pointer',
    },
  },
})(Box);

export const Title = withStyles({
  root: {
    '&:hover': {
      cursor: 'pointer',
    },
  }
})(Typography);

interface GroupTitleProps {
  title: string;
  scrollId: string;
  subtitle?: SuperString;
  actions?: JSX.Element;
}

export const GroupTitle: FC<GroupTitleProps> = ({ title, scrollId, subtitle, actions }) => {
  const subtitleSection = subtitle && (
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

export const Check = withStyles({
  root: {
    fill: 'green',
  }
})(MuiCheck);

export const Close = withStyles({
  root: {
    fill: 'red',
  }
})(MuiClose);

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

export const stringArray = (sizes: string[] | null) => sizes ? sizes.sort().join(', ') : noValue;

export const designKits = (designKits: FrameworkFeaturesById['designKits']) => designKits !== false ? (
  pipe<DesignKit[], DesignKit[], ReactNode[], ReactNode>(
    sortBy(prop('type')),
    map(({ href, type }) => (
      <Link href={href} key={type} style={{ marginRight: 8 }}>{type}</Link>
    )),
    kits => <>{kits}</>,
  )(designKits)
) : checkmark(false);

export const themer = (themer: FrameworkFeaturesById['themer']) => themer !== false ? (
  <Link href={themer as unknown as string}>Link</Link>
) : checkmark(themer);
