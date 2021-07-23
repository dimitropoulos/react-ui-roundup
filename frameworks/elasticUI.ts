import { Framework } from '../entities';

const frameworkHomepage = 'https://elastic.github.io/eui';

export const elasticUI: Framework = {
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/#/navigation/button`,
      options: {
        disabled: true,
        groupable: true,
        icon: ['left', 'right', 'only'],
        loading: true,
        sizes: ['m', 'sm', 'xs'],
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/#/forms/form-controls`,
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
      componentURL: `${frameworkHomepage}/#/forms/date-picker`,
      options: {
        clearable: true,
        customLocale: true,
        minMax: true,
        modes: ['day'],
        presets: false,
        range: true,
        time: true,
      },
    },
    {
      componentId: 'errorBoundary',
      componentName: 'ErrorBoundary',
      componentURL: `${frameworkHomepage}/#/utilities/error-boundary`,
      options: {
        customText: false,
        dropInFallback: false,
        wrapperFallback: false,
      },
    },
    {
      componentId: 'select',
      componentName: 'SuperSelect',
      componentURL: `${frameworkHomepage}/#/forms/super-select`,
      options: {
        async: true,
        disabled: false,
        disabledOptions: true,
        filterable: false,
        groupable: false,
      },
    },
    {
      componentId: 'stepper',
      componentName: 'Steps',
      componentURL: `${frameworkHomepage}/#/navigation/steps`,
      options: {
        canBeVertical: true,
        clickable: false,
        stepDescription: false,
        stepError: false,
        stepIcon: false,
      },
    },
    {
      componentId: 'switch',
      componentName: 'Switch',
      componentURL: `${frameworkHomepage}/#/forms/form-controls`,
      options: {
        disabled: true,
        indeterminate: false,
        internalIcons: false,
        internalText: false,
        labelPlacement: ['right'],
        loading: false,
        sizes: ['default', 'compressed'],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/#/navigation/tabs`,
      options: {
        canBeVertical: false,
      },
    },
  ],
  frameworkFeaturesById: {
    darkMode: true,
    designKits: [
      {
        href: `${frameworkHomepage}`,
        type: 'Sketch',
      },
    ],
    rtlSupport: false,
    themer: false,
    typeScript: true,
  },
  frameworkHomepage,
  frameworkId: 'elasticUI',
  frameworkName: 'Elastic UI',
  repoURL: 'https://github.com/elastic/eui',
};
