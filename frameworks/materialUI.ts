import { Framework } from "../entities";

const frameworkHomepage = 'https://material-ui.com';

export const materialUI: Framework = {
  frameworkHomepage,
  frameworkId: 'materialUI',
  repoURL: 'https://github.com/mui-org/material-ui',
  frameworkName: 'Material UI',
  frameworkFeaturesById: {
    darkMode: true,
    designKits: [
      {
        type: 'Figma',
        href: `${frameworkHomepage}/discover-more/related-projects/#design-resources`
      },
      {
        type: 'Sketch',
        href: `${frameworkHomepage}/discover-more/related-projects/#design-resources`
      },
    ],
    rtlSupport: true,
    themer: `${frameworkHomepage}/discover-more/related-projects/#theming`,
    typeScript: true,
  },
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/components/buttons/`,
      options: {
        sizes: ['small', 'medium', 'large'],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/components/tabs/`,
      options: {
        canBeVertical: true,
      },
    },
  ],
};
