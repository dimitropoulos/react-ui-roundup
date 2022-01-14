import { Framework } from '../frameworks';

const frameworkHomepage = 'https://blueprintjs.com';

export const blueprint: Framework = {
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/docs/#core/components/button`,
      options: {
        disabled: true,
        groupable: true,
        icon: ['left', 'right', 'only'],
        loading: true,
        sizes: ['default', 'large'],
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/docs/#core/components/checkbox`,
      options: {
        customIcon: false,
        disabled: false,
        indeterminate: true,
        invalid: false,
        labelPlacement: ['right', 'left'],
      },
    },
    {
      componentId: 'datePicker',
      componentName: 'DatePicker',
      componentURL: `${frameworkHomepage}/docs/#datetime/daterangepicker`,
      options: {
        clearable: false,
        customLocale: true,
        minMax: true,
        modes: ['day', 'month', 'year'],
        presets: true,
        range: true,
        time: true,
      },
    },
    {
      componentId: 'select',
      componentName: 'Select',
      componentURL: `${frameworkHomepage}/docs/#select/select-component`,
      options: {
        async: true,
        disabled: true,
        disabledOptions: true,
        filterable: true,
        groupable: true,
        icons: [],
        virtual: true,
      },
    },
    {
      componentId: 'switch',
      componentName: 'Switch',
      componentURL: `${frameworkHomepage}/docs/#core/components/switch`,
      options: {
        disabled: true,
        indeterminate: false,
        internalIcons: false,
        internalText: true,
        labelPlacement: ['left', 'right'],
        loading: false,
        sizes: ['default', 'large'],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/docs/#core/components/tabs`,
      options: {
        canBeVertical: true,
      },
    },
  ],
  frameworkFeaturesById: {
    darkMode: true,
    designKits: [
      {
        href: `${frameworkHomepage}/docs/#resources`,
        type: 'Sketch',
      },
    ],
    rtlSupport: true,
    themer: false,
    typeScript: true,
  },
  frameworkHomepage,
  frameworkId: 'blueprint',
  frameworkName: 'Blueprint',
  repoURL: 'https://github.com/palantir/blueprint',
};
