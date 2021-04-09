import { Framework } from '../entities';

const frameworkHomepage = 'https://garden.zendesk.com';

export const zendesk: Framework = {
  components: [
    {
      componentId: 'alert',
      componentName: 'Notification',
      componentURL: 'https://garden.zendesk.com/components',
      options: {
        closable: true,
        types: ['success', 'info', 'warning', 'error'],
      },
    },
    {
      componentId: 'avatar',
      componentName: 'Avatar',
      componentURL: `${frameworkHomepage}/components/avatar`,
      options: {
        badge: true,
        shapes: ['circle', 'rounded-square'],
        sizes: ['extraextrasmall', 'extrasmall', 'small', 'medium', 'large'],
        types: ['image', 'icon', 'text'],
      },
    },
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/components/button`,
      options: {
        disabled: true,
        groupable: true,
        icon: ['only'],
        loading: false,
        sizes: ['small', 'large', 'default'],
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/components/checkbox`,
      options: {
        customIcon: false,
        disabled: true,
        indeterminate: true,
        invalid: false,
        labelPlacement: ['right'],
      },
    },
    {
      componentId: 'stepper',
      componentName: 'Stepper',
      componentURL: `${frameworkHomepage}/components/stepper`,
      options: {
        canBeVertical: false,
        clickable: false,
        stepDescription: false,
        stepError: false,
        stepIcon: false,
      },
    },
    {
      componentId: 'switch',
      componentName: 'Toggle',
      componentURL: `${frameworkHomepage}/components/toggle`,
      options: {
        disabled: false,
        indeterminate: false,
        internalIcons: false,
        internalText: false,
        labelPlacement: ['above', 'below'],
        loading: false,
        sizes: [],
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
    darkMode: false,
    designKits: false,
    rtlSupport: true,
    themer: false,
    typeScript: true,
  },
  frameworkHomepage,
  frameworkId: 'zendesk',
  frameworkName: 'Zendesk Garden',
  repoURL: 'https://github.com/zendeskgarden/react-components',
};
