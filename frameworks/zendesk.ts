import { Framework } from "../entities";

const frameworkHomepage = 'https://garden.zendesk.com';

export const zendesk: Framework = {
  frameworkHomepage,
  frameworkId: 'zendesk',
  repoURL: 'https://github.com/zendeskgarden/react-components',
  frameworkName: 'Zendesk Garden',
  frameworkFeaturesById: {
    darkMode: false,
    designKits: false,
    rtlSupport: true,
    themer: false,
    typeScript: true,
  },
  components: [
    {
      componentId: 'alert',
      componentName: 'Notification',
      componentURL: `${frameworkHomepage}/react-components/notifications/`,
      options: {
        closable: true,
        types: ['success', 'info', 'warning', 'error'],
      },
    },
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/components/buttons`,
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
      componentURL: 'https://zendeskgarden.github.io/react-components/accordions/#stepper',
      options: {
        canBeVertical: false,
        clickable: false,
        stepDescription: false,
        stepIcon: false,
        stepError: false,
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
};
