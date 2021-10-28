import { Framework } from '../frameworks';

const frameworkHomepage = 'https://primefaces.org/primereact';

export const primeReact: Framework = {
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/showcase/#/button`,
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
      componentURL: `${frameworkHomepage}/showcase/#/checkbox`,
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
      componentURL: `${frameworkHomepage}/showcase/#/dropdown`,
      options: {
        async: true,
        disabled: true,
        disabledOptions: true,
        filterable: true,
        groupable: true,
        icons: ['composable'],
      },
    },
    {
      componentId: 'stepper',
      componentName: 'Steps',
      componentURL: `${frameworkHomepage}/showcase/#/steps`,
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
      componentURL: `${frameworkHomepage}/showcase/#/inputswitch`,
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
      componentURL: `${frameworkHomepage}/showcase/#/tabview`,
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
