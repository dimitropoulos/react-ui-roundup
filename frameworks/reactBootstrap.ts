import { Framework } from '../entities';

const frameworkHomepage = 'https://react-bootstrap.github.io';

export const reactBootstrap: Framework = {
  frameworkHomepage,
  frameworkId: 'reactBootstrap',
  repoURL: 'https://github.com/react-bootstrap/react-bootstrap',
  frameworkName: 'React Bootstrap',
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
      componentURL: `${frameworkHomepage}/components/buttons`,
      options: {
        sizes: ['sm', 'lg'],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/components/tabs`,
      options: {
        canBeVertical: false,
      },
    },
    {
      componentId: 'alert',
      componentName: 'Alert',
      componentURL: `${frameworkHomepage}/components/alerts`,
      options: {
        closable: true,
        types: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      },
    },
  ],
};
