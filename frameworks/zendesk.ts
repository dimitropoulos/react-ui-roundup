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
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/react-components/buttons/`,
      options: {
        sizes: ['small', 'large', 'default'],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/react-components/tabs/`,
      options: {
        canBeVertical: true,
      },
    },
    {
      componentId: 'alert',
      componentName: 'Notification',
      componentURL: `${frameworkHomepage}/react-components/notifications/`,
      options: {
        closable: true,
        types: ['success', 'info', 'warning', 'error'],
      },
    },
  ],
};
