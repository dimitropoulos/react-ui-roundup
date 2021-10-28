import { Framework } from '../frameworks';

const frameworkHomepage = 'http://react.carbondesignsystem.com';

export const carbonDesign: Framework = {
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/?path=/story/buttons--default`,
      options: {
        disabled: true,
        groupable: true,
        icon: ['right', 'only'],
        loading: true,
        sizes: ['default', 'field', 'small'],
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/?path=/story/checkbox--checked`,
      options: {
        customIcon: false,
        disabled: true,
        indeterminate: true,
        invalid: false,
        labelPlacement: ['right'],
      },
    },
    {
      componentId: 'stepper',
      componentName: 'ProgressIndicator',
      componentURL: `${frameworkHomepage}/?path=/story/progressindicator--default`,
      options: {
        canBeVertical: true,
        clickable: true,
        stepDescription: true,
        stepError: true,
        stepIcon: false,
      },
    },
    {
      componentId: 'select',
      componentName: 'Select',
      componentURL: `${frameworkHomepage}/?path=/story/components-select--default`,
      options: {
        async: false,
        disabled: true,
        disabledOptions: true,
        filterable: false,
        groupable: true,
        icons: [],
      },
    },
    {
      componentId: 'switch',
      componentName: 'Switch',
      componentURL: `${frameworkHomepage}/?path=/story/toggle--toggled`,
      options: {
        disabled: true,
        indeterminate: false,
        internalIcons: false,
        internalText: false,
        labelPlacement: ['right'],
        loading: false,
        sizes: ['default', 'small'],
      },
    },
    {
      componentId: 'datePicker',
      componentName: 'DatePicker',
      componentURL: `${frameworkHomepage}/?path=/story/components-datepicker--simple`,
      options: {
        clearable: false,
        customLocale: false,
        minMax: true,
        modes: ['day', 'year'],
        presets: false,
        range: true,
        time: true,
      },
    },
    {
      componentId: 'errorBoundary',
      componentName: 'ErrorBoundary',
      componentURL: `${frameworkHomepage}/?path=/story/errorboundary--default`,
      options: {
        customText: false,
        dropInFallback: true,
        wrapperFallback: false,
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/?path=/story/tabs--default`,
      options: {
        canBeVertical: false,
      },
    },
  ],
  frameworkFeaturesById: {
    darkMode: true,
    designKits: [
      {
        href: 'https://www.carbondesignsystem.com/resources#theme-libraries',
        type: 'Sketch',
      },
    ],
    rtlSupport: true,
    themer: 'https://themes.carbondesignsystem.com/?nav=button',
    typeScript: false,
  },
  frameworkHomepage,
  frameworkId: 'carbonDesign',
  frameworkName: 'Carbon Design',
  repoURL: 'https://github.com/carbon-design-system/carbon',
};
