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
    rtlSupport: false,
    themer: false,
    typeScript: true,
  },
  components: [
    {
      componentId: 'alert',
      componentName: 'Notification',
      componentURL: `${frameworkHomepage}/react-components/notifications`,
      options: {
        closable: true,
        types: ['success', 'info', 'warning', 'error'],
      },
    },
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/react-components/buttons`,
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
      componentURL: `${frameworkHomepage}/css-components/forms/checkbox`,
      options: {
        customIcon: false,
        disabled: true,
        indeterminate: true,
        invalid: false,
        labelPlacement: ['right'],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/react-components/tabs`,
      options: {
        canBeVertical: true,
      },
    },
  ],
};
