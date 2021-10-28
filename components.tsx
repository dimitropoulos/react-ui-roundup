import { indexBy, prop, sortBy } from 'ramda';
import { ReactNode } from 'react-transition-group/node_modules/@types/react';

import { Alert, alertComponent } from './components/alert';
import { AppBar, appBarComponent } from './components/appBar';
import { Avatar, avatar } from './components/avatar';
import { AvatarGroup, avatarGroup } from './components/avatarGroup';
import { Button, button } from './components/button';
import { Checkbox, checkbox } from './components/checkbox';
import { DatePicker, datePicker } from './components/datePicker';
import { ErrorBoundary, errorBoundary } from './components/errorBoundary';
import { Select, select } from './components/select';
import { Stepper, stepper } from './components/stepper';
import { Switch, switchComponent } from './components/switch';
import { Tabs, tabs } from './components/tabs';
import { Sentence } from './entities';

export type Component =
  | Alert
  | AppBar
  | Avatar
  | AvatarGroup
  | Button
  | Checkbox
  | DatePicker
  | ErrorBoundary
  | Select
  | Stepper
  | Switch
  | Tabs;


type OptionId = string;

export interface Option {
  criteria: Sentence;
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
  indefiniteArticle: 'a' | 'an';
  description: SuperString;
  optionsById: OptionsById;
}


export const componentInfo: ComponentInfo[] = sortBy(prop('componentId'), [
  appBarComponent,
  alertComponent,
  avatar,
  avatarGroup,
  button,
  checkbox,
  datePicker,
  errorBoundary,
  select,
  stepper,
  switchComponent,
  tabs,
]);

export const componentInfoById = indexBy(prop('componentId'), componentInfo);
