import { Framework } from '../entities';

const frameworkHomepage = 'https://material-ui.com';

export const materialUI: Framework = {
  components: [
    {
      componentId: 'alert',
      componentName: 'Alert',
      componentURL: `${frameworkHomepage}/components/alert`,
      options: {
        closable: true,
        types: ['error', 'warning', 'info', 'success'],
      },
    },
    {
      componentId: 'avatar',
      componentName: 'Avatar',
      componentURL: `${frameworkHomepage}/components/avatars`,
      options: {
        badge: true,
        shapes: ['circle', 'square', 'rounded-square'],
        sizes: ['number'],
        types: ['image', 'icon', 'text'],
      },
    },
    {
      componentId: 'avatarGroup',
      componentName: 'AvatarGroup',
      componentURL: `${frameworkHomepage}/components/avatars`,
      options: {
        expandableGroup: false,
        maxCount: true,
      },
    },
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/components/buttons`,
      options: {
        disabled: true,
        groupable: true,
        icon: ['left', 'right', 'only'],
        loading: false,
        sizes: ['small', 'medium', 'large'],
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/components/checkboxes`,
      options: {
        customIcon: true,
        disabled: true,
        indeterminate: true,
        invalid: false,
        labelPlacement: ['right', 'left', 'above', 'below'],
      },
    },
    {
      componentId: 'stepper',
      componentName: 'Stepper',
      componentURL: `${frameworkHomepage}/components/steppers`,
      options: {
        canBeVertical: true,
        clickable: true,
        stepDescription: true,
        stepError: true,
        stepIcon: true,
      },
    },
    {
      componentId: 'switch',
      componentName: 'Switch',
      componentURL: `${frameworkHomepage}/components/switches`,
      options: {
        disabled: true,
        indeterminate: false,
        internalIcons: false,
        internalText: false,
        labelPlacement: ['above', 'below', 'left', 'right'],
        loading: false,
        sizes: ['default', 'small'],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/components/tabs`,
      options: {
        canBeVertical: true,
      },
    },
  ],
  frameworkFeaturesById: {
    darkMode: true,
    designKits: [
      {
        href: `${frameworkHomepage}/discover-more/related-projects/#design-resources`,
        type: 'Figma',
      },
      {
        href: `${frameworkHomepage}/discover-more/related-projects/#design-resources`,
        type: 'Sketch',
      },
    ],
    rtlSupport: true,
    themer: `${frameworkHomepage}/discover-more/related-projects/#theming`,
    typeScript: true,
  },
  frameworkHomepage,
  frameworkId: 'materialUI',
  frameworkName: 'Material UI',
  repoURL: 'https://github.com/mui-org/material-ui',
};
