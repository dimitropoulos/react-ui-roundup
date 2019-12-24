import { Framework } from '../entities';

const frameworkHomepage = 'http://react-toolbox.io';

export const reactToolbox: Framework = {
  frameworkHomepage,
  frameworkId: 'reactToolbox',
  repoURL: 'https://github.com/react-toolbox/react-toolbox',
  frameworkName: 'React Toolbox',
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
      componentURL: `${frameworkHomepage}/#/components/button`,
      options: {
        disabled: true,
        groupable: false,
        icon: ['left', 'only'],
        loading: false,
        sizes: null,
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/#/components/checkbox`,
      options: {
        customIcon: false,
        disabled: true,
        indeterminate: false,
        invalid: false,
        labelPlacement: ['right'],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/#/components/tabs`,
      options: {
        canBeVertical: false,
      },
    },
  ],
};