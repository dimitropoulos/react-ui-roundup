import { indexBy, prop, sortBy } from 'ramda';

import { alertComponent } from './components/alert';
import { avatar } from './components/avatar';
import { avatarGroup } from './components/avatarGroup';
import { button } from './components/button';
import { checkbox } from './components/checkbox';
import { datePicker } from './components/datePicker';
import { errorBoundary } from './components/errorBoundary';
import { select } from './components/select';
import { stepper } from './components/stepper';
import { switchComponent } from './components/switch';
import { tabs } from './components/tabs';
import { ComponentInfo } from './entities';

export const componentInfo: ComponentInfo[] = sortBy(prop('componentId'), [
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
