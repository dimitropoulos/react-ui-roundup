import { Framework } from '../entities';

const frameworkHomepage = 'https://react-md.dev';

export const reactMD: Framework = {
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/packages/buttons/demos`,
      options: {
        disabled: true,
        groupable: false,
        icon: ['left', 'right', 'only'],
        loading: false,
        sizes: null,
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/packages/form/selection-control-demos`,
      options: {
        customIcon: true,
        disabled: true,
        indeterminate: false,
        invalid: false,
        labelPlacement: ['right'],
      },
    },
    {
      componentId: 'select',
      componentName: 'Dropdown',
      componentURL: `${frameworkHomepage}/packages/dropdown/demos`,
      options: {
        async: false,
        disabled: false,
        disabledOptions: false,
        filterable: false,
        groupable: false,
        icons: ['start', 'end'],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/packages/tabs/demos`,
      options: {
        canBeVertical: false,
      },
    },
  ],
  frameworkFeaturesById: {
    darkMode: true,
    designKits: false,
    rtlSupport: false,
    themer: false,
    typeScript: true,
  },
  frameworkHomepage,
  frameworkId: 'reactMD',
  frameworkName: 'react-md',
  repoURL: 'https://github.com/mlaursen/react-md',
};
