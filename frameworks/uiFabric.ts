import { Framework } from "../entities";

const frameworkHomepage = 'https://developer.microsoft.com/en-us/fluentui';

export const uiFabric: Framework = {
  frameworkHomepage,
  frameworkId: 'uiFabric',
  repoURL: 'https://github.com/microsoft/fluentui',
  frameworkName: 'UI Fabric',
  frameworkFeaturesById: {
    darkMode: true,
    designKits: [
      {
        type: 'Sketch',
        href: `${frameworkHomepage}#/resources`,
      },
      {
        type: 'Figma',
        href: `${frameworkHomepage}#/resources`,
      },
    ],
    rtlSupport: false,
    themer: false,
    typeScript: true,
  },
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
};
