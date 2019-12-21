import { Framework } from "../entities";

const frameworkHomepage = 'http://react.carbondesignsystem.com';

export const carbonDesign: Framework = {
  frameworkHomepage,
  frameworkId: 'carbonDesign',
  repoURL: 'https://github.com/carbon-design-system/carbon',
  frameworkName: 'Carbon Design',
  frameworkFeaturesById: {
    darkMode: false,
    designKits: false,
    rtlSupport: true,
    themer: false,
    typeScript: false,
  },
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/?path=/story/buttons--default`,
      options: {
        sizes: ['default', 'field', 'small'],
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
};
