import { Framework } from "../entities";

const frameworkHomepage = 'https://element.eleme.io';

export const element: Framework = {
  frameworkHomepage,
  frameworkId: 'element',
  repoURL: 'https://github.com/ElemeFE/element',
  frameworkName: 'Element',
  frameworkFeaturesById: {
    darkMode: false,
    designKits: [
      {
        type: 'Axure',
        href: `${frameworkHomepage}/#/en-US/resource`,
      },
      {
        type: 'Sketch',
        href: `${frameworkHomepage}/#/en-US/resource`,
      },
    ],
    rtlSupport: false,
    themer: `${frameworkHomepage}/#/en-US/theme/preview`,
    typeScript: false,
  },
  components: [
    {
      componentId: 'alert',
      componentName: 'Alert',
      componentURL: `${frameworkHomepage}/#/en-US/component/alert`,
      options: {
        closable: true,
        types: ['success', 'info', 'warning', 'error'],
      },
    },
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/#/en-US/component/button`,
      options: {
        disabled: true,
        groupable: true,
        icon: ['only', 'left', 'right'],
        loading: true,
        sizes: ['default', 'medium', 'small', 'mini'],
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/#/en-US/component/checkbox`,
      options: {
        customIcon: false,
        disabled: true,
        indeterminate: true,
        invalid: false,
        labelPlacement: ['right'],
      },
    },
    {
      componentId: 'switch',
      componentName: 'Switch',
      componentURL: `${frameworkHomepage}/#/en-US/component/switch`,
      options: {
        disabled: true,
        indeterminate: false,
        internalIcons: false,
        internalText: false,
        labelPlacement: ['left', 'right'],
        loading: false,
        sizes: [],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/#/en-US/component/tabs`,
      options: {
        canBeVertical: true,
      },
    },
  ],
};