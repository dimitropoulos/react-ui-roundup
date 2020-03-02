import { Framework } from "../entities";

const frameworkHomepage = 'https://smooth-code.com/open-source/smooth-ui';

export const smoothUI: Framework = {
  frameworkHomepage,
  frameworkId: 'smoothUI',
  repoURL: 'https://github.com/smooth-code/smooth-ui',
  frameworkName: 'Smooth UI',
  frameworkFeaturesById: {
    darkMode: true,
    designKits: false,
    rtlSupport: false,
    themer: false,
    typeScript: false,
  },
  components: [
    {
      componentId: 'alert',
      componentName: 'Alert',
      componentURL: `${frameworkHomepage}/docs/alert`,
      options: {
        closable: false,
        types: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      },
    },
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/docs/button`,
      options: {
        disabled: true,
        groupable: false,
        icon: [],
        loading: false,
        sizes: ['xs', 'sm', 'base', 'lg', 'xl'],
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/docs/checkbox`,
      options: {
        customIcon: false,
        disabled: true,
        indeterminate: false,
        invalid: false,
        labelPlacement: ['right'],
      },
    },
    {
      componentId: 'switch',
      componentName: 'Switch',
      componentURL: `${frameworkHomepage}/docs/switch`,
      options: {
        disabled: true,
        internalIcons: false,
        internalText: true,
        labelPlacement: [],
        loading: false,
        sizes: ['xs', 'sm', 'base', 'lg', 'xl'],
      },
    },
  ],
};