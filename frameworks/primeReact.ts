import { Framework } from "../entities";

const frameworkHomepage = 'https://primefaces.org/primereact';

export const primeReact: Framework = {
  frameworkHomepage,
  frameworkId: 'primeReact',
  repoURL: 'https://github.com/primefaces/primereact',
  frameworkName: 'Prime React',
  frameworkFeaturesById: {
    darkMode: true,
    designKits: false,
    rtlSupport: false,
    themer: false,
    typeScript: false,
  },
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
      componentId: 'stepper',
      componentName: 'Steps',
      componentURL: `${frameworkHomepage}/showcase/#/steps`,
      options: {
        canBeVertical: false,
        clickable: true,
        stepDescription: false,
        stepIcon: false,
        stepError: false,
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
};