import { Framework } from '../entities';

const frameworkHomepage = 'https://smooth-code.com/open-source/smooth-ui';

export const smoothUI: Framework = {
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
      componentId: 'select',
      componentName: 'Select',
      componentURL: `${frameworkHomepage}/docs/select`,
      options: {
        async: false,
        disabled: true,
        disabledOptions: true,
        filterable: false,
        groupable: false,
        icons: [],
      },
    },
    {
      componentId: 'switch',
      componentName: 'Switch',
      componentURL: `${frameworkHomepage}/docs/switch`,
      options: {
        disabled: true,
        indeterminate: false,
        internalIcons: false,
        internalText: true,
        labelPlacement: [],
        loading: false,
        sizes: ['xs', 'sm', 'base', 'lg', 'xl'],
      },
    },
  ],
  frameworkFeaturesById: {
    darkMode: true,
    designKits: false,
    rtlSupport: false,
    themer: false,
    typeScript: false,
  },
  frameworkHomepage,
  frameworkId: 'smoothUI',
  frameworkName: 'Smooth UI',
  repoURL: 'https://github.com/smooth-code/smooth-ui',
};
