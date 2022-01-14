import { Framework } from '../frameworks';

const frameworkHomepage = 'https://element.eleme.io';

export const element: Framework = {
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
      componentId: 'avatar',
      componentName: 'Avatar',
      componentURL: `${frameworkHomepage}/#/en-US/component/avatar`,
      options: {
        badge: false,
        shapes: ['circle', 'square'],
        sizes: ['number', 'large', 'medium', 'small'],
        types: ['image', 'image', 'text'],
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
      componentId: 'datePicker',
      componentName: 'DatePicker',
      componentURL: `${frameworkHomepage}/#/en-US/component/date-picker`,
      options: {
        clearable: true,
        customLocale: false,
        minMax: true,
        modes: ['day', 'month', 'week', 'year'],
        presets: true,
        range: true,
        time: true,
      },
    },
    {
      componentId: 'select',
      componentName: 'Select',
      componentURL: `${frameworkHomepage}/#/en-US/component/select`,
      options: {
        async: true,
        disabled: true,
        disabledOptions: true,
        filterable: true,
        groupable: true,
        icons: [],
        virtual: false,
      },
    },
    {
      componentId: 'stepper',
      componentName: 'Steps',
      componentURL: `${frameworkHomepage}/#/en-US/component/steps`,
      options: {
        canBeVertical: true,
        clickable: false,
        stepDescription: true,
        stepError: true,
        stepIcon: true,
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
  frameworkFeaturesById: {
    darkMode: false,
    designKits: [
      {
        href: `${frameworkHomepage}/#/en-US/resource`,
        type: 'Axure',
      },
      {
        href: `${frameworkHomepage}/#/en-US/resource`,
        type: 'Sketch',
      },
    ],
    rtlSupport: false,
    themer: `${frameworkHomepage}/#/en-US/theme/preview`,
    typeScript: false,
  },
  frameworkHomepage,
  frameworkId: 'element',
  frameworkName: 'Element',
  repoURL: 'https://github.com/ElemeFE/element',
};
