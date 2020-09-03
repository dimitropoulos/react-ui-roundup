import { Framework } from "../entities";

const frameworkHomepage = 'https://semantic-ui.com';

export const semanticUI: Framework = {
  frameworkHomepage,
  frameworkId: 'semanticUI',
  repoURL: 'https://github.com/Semantic-Org/Semantic-UI',
  frameworkName: 'Semantic UI',
  frameworkFeaturesById: {
    darkMode: false,
    designKits: [
      {
        type: 'Sketch',
        href: `${frameworkHomepage}/introduction/advanced-usage.html#sketch-files`,
      },
    ],
    rtlSupport: true,
    themer: false,
    typeScript: false,
  },
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
      componentId: 'stepper',
      componentName: 'Steps',
      componentURL: `${frameworkHomepage}/elements/step.html`,
      options: {
        canBeVertical: true,
        clickable: true,
        stepDescription: true,
        stepIcon: true,
        stepError: false,
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
};