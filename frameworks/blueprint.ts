import { Framework } from "../entities";

const frameworkHomepage = 'https://blueprintjs.com';

export const blueprint: Framework = {
  frameworkHomepage,
  frameworkId: 'blueprint',
  frameworkName: 'Blueprint',
  repoURL: 'https://github.com/palantir/blueprint',
  frameworkFeaturesById: {
    darkMode: true,
    designKits: [
      {
        type: 'Sketch',
        href: `${frameworkHomepage}/docs/#resources`,
      },
    ],
    rtlSupport: true,
    themer: false,
    typeScript: true,
  },
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
};
