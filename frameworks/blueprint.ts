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
