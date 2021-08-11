import { Framework } from '../entities';

const frameworkHomepage = 'https://developer.microsoft.com/en-us/fluentui';

export const fluentUI: Framework = {
  components: [
    {
      componentId: 'alert',
      componentName: 'MessageBar',
      componentURL: `${frameworkHomepage}#/controls/web/messagebar`,
      options: {
        closable: true,
        types: ['blocked', 'error', 'info', 'remove', 'severeWarning', 'success', 'warning'],
      },
    },
    {
      componentId: 'avatar',
      componentName: 'Persona',
      componentURL: `${frameworkHomepage}#/controls/web/persona`,
      options: {
        badge: true,
        shapes: ['circle', 'rounded-square'],
        sizes: ['number'],
        types: ['icon', 'image', 'text'],
      },
    },
    {
      componentId: 'avatarGroup',
      componentName: 'Facepile',
      componentURL: `${frameworkHomepage}#/controls/web/facepile`,
      options: {
        expandableGroup: true,
        maxCount: true,
      },
    },
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}#/controls/web/button`,
      options: {
        disabled: true,
        groupable: false,
        icon: null,
        loading: false,
        sizes: null,
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}#/controls/web/checkbox`,
      options: {
        customIcon: false,
        disabled: true,
        indeterminate: true,
        invalid: false,
        labelPlacement: ['right', 'left'],
      },
    },
    {
      componentId: 'datePicker',
      componentName: 'DatePicker',
      componentURL: `${frameworkHomepage}#/controls/web/datepicker`,
      options: {
        clearable: false,
        customLocale: false,
        minMax: true,
        modes: ['day', 'month', 'year'],
        presets: false,
        range: true,
        time: false,
      },
    },
    {
      componentId: 'select',
      componentName: 'Dropdown',
      componentURL: `${frameworkHomepage}#/controls/web/dropdown`,
      options: {
        async: false,
        disabled: true,
        disabledOptions: true,
        filterable: true,
        groupable: true,
        icons: ['composable'],
      },
    },
    {
      componentId: 'switch',
      componentName: 'Toggle',
      componentURL: `${frameworkHomepage}#/controls/web/toggle`,
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
      componentName: 'Pivot',
      componentURL: `${frameworkHomepage}#/controls/web/pivot`,
      options: {
        canBeVertical: false,
      },
    },
  ],
  frameworkFeaturesById: {
    darkMode: true,
    designKits: [
      {
        href: `${frameworkHomepage}#/resources`,
        type: 'Sketch',
      },
      {
        href: `${frameworkHomepage}#/resources`,
        type: 'Figma',
      },
    ],
    rtlSupport: false,
    themer: false,
    typeScript: true,
  },
  frameworkHomepage,
  frameworkId: 'fluentUI',
  frameworkName: 'Fluent UI',
  repoURL: 'https://github.com/microsoft/fluentui',
};
