import { Framework } from "../entities";

const frameworkHomepage = 'http://elemental-ui.com';

export const elementalUI: Framework = {
  frameworkHomepage,
  frameworkId: 'elementalUI',
  repoURL: 'https://github.com/elementalui/elemental',
  frameworkName: 'Elemental UI',
  frameworkFeaturesById: {
    darkMode: false,
    designKits: false,
    rtlSupport: false,
    themer: false,
    typeScript: false,
  },
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/buttons`,
      options: {
        sizes: ['large', 'default', 'small', 'extra small'],
      },
    },
    {
      componentId: 'alert',
      componentName: 'Alert',
      componentURL: `${frameworkHomepage}/misc`,
      options: {
        closable: false,
        types: ['danger', 'info', 'primary', 'success', 'warning'],
      },
    },
  ],
};