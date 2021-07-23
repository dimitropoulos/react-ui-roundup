import { Framework } from '../entities';

const frameworkHomepage = 'https://semantic-ui.com';

export const semanticUI: Framework = {
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/elements/button.html`,
      options: {
        disabled: true,
        groupable: true,
        icon: ['left', 'right', 'only'],
        loading: true,
        sizes: ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'],
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/modules/checkbox.html`,
      options: {
        customIcon: false,
        disabled: true,
        indeterminate: true,
        invalid: false,
        labelPlacement: ['right'],
      },
    },
    {
      componentId: 'select',
      componentName: 'Dropdown',
      componentURL: `${frameworkHomepage}/modules/dropdown.html`,
      options: {
        async: true,
        disabled: true,
        disabledOptions: true,
        filterable: true,
        groupable: false,
      },
    },
    {
      componentId: 'stepper',
      componentName: 'Steps',
      componentURL: `${frameworkHomepage}/elements/step.html`,
      options: {
        canBeVertical: true,
        clickable: true,
        stepDescription: true,
        stepError: false,
        stepIcon: true,
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/modules/tab.html`,
      options: {
        canBeVertical: false,
      },
    },
  ],
  frameworkFeaturesById: {
    darkMode: false,
    designKits: [
      {
        href: `${frameworkHomepage}/introduction/advanced-usage.html#sketch-files`,
        type: 'Sketch',
      },
    ],
    rtlSupport: true,
    themer: false,
    typeScript: false,
  },
  frameworkHomepage,
  frameworkId: 'semanticUI',
  frameworkName: 'Semantic UI',
  repoURL: 'https://github.com/Semantic-Org/Semantic-UI',
};
