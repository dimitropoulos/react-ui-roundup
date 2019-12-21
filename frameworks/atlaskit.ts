import { Framework } from '../entities';

const frameworkHomepage = 'https://atlaskit.atlassian.com';

export const atlaskit: Framework = {
  frameworkHomepage,
  frameworkId: 'atlaskit',
  repoURL: 'https://bitbucket.org/atlassian/atlaskit-mk-2/src/master',
  frameworkName: 'Atlaskit',
  frameworkFeaturesById: {
    darkMode: false,
    designKits: [
      {
        type: 'Sketch',
        href: `https://atlassian.design/guidelines/product/resources/web-product-gui-pack`,
      }
    ],
    rtlSupport: false,
    themer: false,
    typeScript: false,
  },
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/packages/core/button`,
      options: {
        sizes: null,
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/packages/core/tabs`,
      options: {
        canBeVertical: false,
      },
    },
    {
      componentId: 'alert',
      componentName: 'SectionMessage',
      componentURL: `${frameworkHomepage}/packages/core/section-message`,
      options: {
        closable: false,
        types: ['info', 'warning', 'error', 'confirmation', 'change'],
      },
    },
    {
      componentId: 'alert',
      componentName: 'Flag',
      componentURL: `${frameworkHomepage}/pakages/core/flag`,
      options: {
        closable: false,
        types: ['info', 'warning', 'error', 'confirmation', 'change'],
      },
    },
  ],
};