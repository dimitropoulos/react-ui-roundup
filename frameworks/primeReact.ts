import { Framework } from '../frameworks';

const frameworkHomepage = 'https://primefaces.org/primereact';

export const primeReact: Framework = {
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/button`,
      options: {
        disabled: false,
        groupable: false,
        icon: ['left', 'right', 'only'],
        loading: false,
        sizes: null,
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/checkbox`,
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
      componentName: 'Dropdown',
      componentURL: `${frameworkHomepage}/dropdown`,
      options: {
        async: true,
        disabled: true,
        disabledOptions: true,
        filterable: true,
        groupable: true,
        icons: ['composable'],
        virtual: true,
      },
    },
    {
      componentId: 'stepper',
      componentName: 'Steps',
      componentURL: `${frameworkHomepage}/steps`,
      options: {
        canBeVertical: false,
        clickable: true,
        stepDescription: false,
        stepError: false,
        stepIcon: false,
      },
    },
    {
      componentId: 'switch',
      componentName: 'InputSwitch',
      componentURL: `${frameworkHomepage}/inputswitch`,
      options: {
        disabled: true,
        indeterminate: false,
        internalIcons: false,
        internalText: false,
        labelPlacement: [],
        loading: false,
        sizes: [],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'TabView',
      componentURL: `${frameworkHomepage}/tabview`,
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
    typeScript: false,
  },
  frameworkHomepage,
  frameworkId: 'primeReact',
  frameworkName: 'Prime React',
  repoURL: 'https://github.com/primefaces/primereact',
};
