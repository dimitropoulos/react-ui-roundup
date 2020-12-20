import { Endpoints } from '@octokit/types';
import { ReactNode } from 'react';

export type RepoInfo = Endpoints['GET /repos/:owner/:repo']['response']['data'];

type OptionId = string;

export interface Option {
  criteria: string;
  name: string;
  optionId: OptionId;
  toJsx: (any: any) => ReactNode | string;
  toMarkdown: (any: any) => string;
}

type OptionsById = {
  [optionId in OptionId]: Option;
};

export type SuperString = string | {
  jsx: ReactNode;
  markdown: string;
};

export interface ComponentInfo {
  componentId: string;

  /** The typical name used by the layman to identify this component. */
  cannonicalName: string;

  /** The English indefinte article to be used to refer to this Component */
  indefiniteArticle: 'an' | 'a';
  description: SuperString;
  optionsById: OptionsById;
}

export type URL = string;

interface BaseComponent {
  componentId: string;

  /** What the Framework _calls_ this component.  That is to say: when you import it, what is the name of the React Element when it is used. */
  componentName: string;

  componentURL: string;
}

export interface Alert extends BaseComponent {
  componentId: 'alert';
  options: {
    closable: boolean;
    types: string[] | null;
  };
}

export interface Avatar extends BaseComponent {
  componentId: 'avatar';
  options: {
    badge: boolean;
    shapes: ('circle' | 'square' | 'rounded-square')[] | null;
    sizes: string[] | null;
    types: ('icon' | 'image' | 'text')[] | null;
  };
}

export interface AvatarGroup extends BaseComponent {
  componentId: 'avatarGroup';
  options: {
    expandableGroup: boolean;
    maxCount: boolean;
  };
}

export interface Button extends BaseComponent {
  componentId: 'button';
  options: {
    disabled: boolean;
    groupable: boolean;
    icon: ('left' | 'right' | 'only')[] | null;
    loading: boolean;
    sizes: string[] | null;
  };
}

export interface Checkbox extends BaseComponent {
  componentId: 'checkbox';
  options: {
    customIcon: boolean;
    disabled: boolean;
    indeterminate: boolean;
    invalid: boolean;
    labelPlacement: ('above' | 'right' | 'left' | 'below')[];
  };
}

export interface ErrorBoundary extends BaseComponent {
  componentId: 'errorBoundary';
  options: {
    customText: boolean;
    dropInFallback: boolean;
    wrapperFallback: boolean;
  };
}

export interface Stepper extends BaseComponent {
  componentId: 'stepper';
  options: {
    canBeVertical: boolean;
    clickable: boolean;
    stepDescription: boolean;
    stepError: boolean;
    stepIcon: boolean;
  };
}

export interface Switch extends BaseComponent {
  componentId: 'switch';
  options: {
    disabled: boolean;
    indeterminate: boolean;
    internalIcons: boolean;
    internalText: boolean;
    labelPlacement: ('above' | 'right' | 'left' | 'below')[];
    loading: boolean;
    sizes: string[];
  };
}

export interface Tabs extends BaseComponent {
  componentId: 'tabs';
  options: {
    canBeVertical: boolean;
  };
}

export type Component =
  | Alert
  | Avatar
  | AvatarGroup
  | Button
  | Checkbox
  | ErrorBoundary
  | Stepper
  | Switch
  | Tabs;

export interface DesignKit {
  type: 'Sketch' | 'Figma' | 'Abstract' | 'Axure' | 'Framer X' | 'Custom';
  href: URL;
}

export interface FrameworkFeaturesById {
  /** criteria: an out-of-the-box dark mode */
  darkMode: boolean;

  /** criteria: a design kit supported by the developers */
  designKits: DesignKit[] | false;

  /** criteria: out-of-the-box support for right-to-left */
  rtlSupport: boolean;

  themer: URL | false;

  /** criteria: high quality and up to date (in the repo, not on DefinitelyTyped) TypeScript types, or the app is written in TypeScript. */
  typeScript: boolean;
}

export interface FrameworkFeatureInfoGeneric<T extends keyof FrameworkFeaturesById> {
  featureId: T;
  criteria: string;
  name: string;
  toJsx: (input: FrameworkFeaturesById[T]) => ReactNode | string;
  toMarkdown: (input: FrameworkFeaturesById[T]) => string;
}

export type FrameworkFeatureInfo =
  | FrameworkFeatureInfoGeneric<'darkMode'>
  | FrameworkFeatureInfoGeneric<'designKits'>
  | FrameworkFeatureInfoGeneric<'rtlSupport'>
  | FrameworkFeatureInfoGeneric<'themer'>
  | FrameworkFeatureInfoGeneric<'typeScript'>;

export type FrameworkInfoByFeatureId = {
  [featureId in keyof FrameworkFeaturesById]: FrameworkFeatureInfo;
};

export type FrameworkId = string;

export interface Framework {
  /** must not end with a trailing forward slash */
  frameworkHomepage: string;

  frameworkId: FrameworkId;

  frameworkName: string;

  repoURL: URL;

  components: Component[];

  frameworkFeaturesById: FrameworkFeaturesById;
}

export type UnwrapedComponent = Component & {
  frameworkInfo: Omit<Framework, 'components'>;
};

export type FrameworksById = {
  [frameworkId in FrameworkId]: Framework;
};
