import { Framework } from "../entities";

const frameworkHomepage = 'https://developer.microsoft.com/en-us/fabric';

export const uiFabric: Framework = {
  frameworkHomepage,
  frameworkId: 'uiFabric',
  repoURL: 'https://github.com/OfficeDev/office-ui-fabric-react',
  frameworkName: 'UI Fabric',
  frameworkFeaturesById: {
    darkMode: false,
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
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}#/controls/web/button`,
      options: {
        sizes: null,
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
    {
      componentId: 'alert',
      componentName: 'MessageBar',
      componentURL: `${frameworkHomepage}#/controls/web/messagebar`,
      options: {
        closable: true,
        types: ['blocked', 'error', 'info', 'remove', 'severeWarning', 'success', 'warning'],
      },
    },
  ],
};
