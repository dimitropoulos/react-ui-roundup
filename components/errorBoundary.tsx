import { Link } from '@mui/material';
import { Fragment } from 'react';

import { ComponentInfo } from '../components';
import { BaseComponent } from '../entities';
import { link } from '../markdown/utils';
import { checkmark, indexByOptionId } from '../utils';

const componentId = 'errorBoundary';

export interface ErrorBoundary extends BaseComponent {
  componentId: typeof componentId;
  options: {
    customText: boolean;
    dropInFallback: boolean;
    wrapperFallback: boolean;
  };
}

export const errorBoundary: ComponentInfo = {
  cannonicalName: 'ErrorBoundary',
  componentId,
  description: {
    jsx: <Fragment><Link href="https://reactjs.org/docs/error-boundaries.html">ErrorBoundaries</Link> are a React 16+ specific feature that uses the <Link href="https://reactjs.org/docs/react-component.html#componentdidcatch">componentDidCatch</Link> API for handling uncaught errors without unmounting the whole React component tree.</Fragment>,
    markdown: `${link({ href: 'https://reactjs.org/docs/error-boundaries.html', text: 'ErrorBoundaries' })} are a React 16+ specific feature that uses the ${link({ href: 'https://reactjs.org/docs/react-component.html#componentdidcatch', text: 'componentDidCatch' })} API for handling uncaught errors without unmounting the whole React component tree.`,
  },
  indefiniteArticle: 'an',
  optionsById: indexByOptionId([
    {
      criteria: 'Has a prop or props that can be used to provide a custom title and/or description (as a string, not a ReactNode).',
      name: 'Custom Text',
      optionId: 'customText',
      ...checkmark,
    },
    {
      criteria: 'Has a prop that can be used to provide a custom ReactNode fallback that does not receive the date of `componentDidCatch`.',
      name: 'Drop-In JSX Fallback',
      optionId: 'dropInFallback',
      ...checkmark,
    },
    {
      criteria: 'Has a prop that can be used to provide a custom ReactNode for fallback which receives the data of `componentDidCatch`.',
      name: 'Wrapper JSX Fallback',
      optionId: 'wrapperFallback',
      ...checkmark,
    },
  ]),
};
