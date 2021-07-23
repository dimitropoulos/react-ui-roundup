import { ComponentInfo } from '../entities';
import { checkmark, indexByOptionId } from '../utils';

export const stepper: ComponentInfo = {
  cannonicalName: 'Stepper',
  componentId: 'stepper',
  description: 'Navigation that guides users through the steps of a task.',
  indefiniteArticle: 'a',
  optionsById: indexByOptionId([
    {
      criteria: 'The steps can be stacked vertically.',
      name: 'Can Be Vertical',
      optionId: 'canBeVertical',
      ...checkmark,
    },
    {
      criteria: 'A user can click on the step itself to navigate.',
      name: 'Clickable',
      optionId: 'clickable',
      ...checkmark,
    },
    {
      criteria: 'A step can have a subtext with a description.',
      name: 'Step Description',
      optionId: 'stepDescription',
      ...checkmark,
    },
    {
      criteria: 'A step with an error can be easily identified to the user.',
      name: 'Step Error',
      optionId: 'stepError',
      ...checkmark,
    },
    {
      criteria: 'The steps have a prop whereby they can be given custom icons.',
      name: 'Step Icon',
      optionId: 'stepIcon',
      ...checkmark,
    },
  ]),
};
