import { Framework } from '../entities';

const frameworkHomepage = 'http://elemental-ui.com';

export const elementalUI: Framework = {
  components: [
    {
      componentId: 'alert',
      componentName: 'Alert',
      componentURL: `${frameworkHomepage}/misc`,
      options: {
        closable: false,
        types: ['danger', 'info', 'primary', 'success', 'warning'],
      },
    },
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/buttons`,
      options: {
        disabled: false,
        groupable: true,
        icon: null,
        loading: false,
        sizes: ['large', 'default', 'small', 'extra small'],
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/components/checkbox`,
      options: {
        customIcon: false,
        disabled: false,
        indeterminate: false,
        invalid: false,
        labelPlacement: ['right'],
      },
    },
  ],
  frameworkFeaturesById: {
    darkMode: false,
    designKits: false,
    rtlSupport: false,
    themer: false,
    typeScript: false,
  },
  frameworkHomepage,
  frameworkId: 'elementalUI',
  frameworkName: 'Elemental UI',
  repoURL: 'https://github.com/elementalui/elemental',
};
