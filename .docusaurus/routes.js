import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '682'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-paul-burgeson-articles',
    component: ComponentCreator('/blog/authors/all-paul-burgeson-articles', 'fc2'),
    exact: true
  },
  {
    path: '/blog/Cleanup & Gas Spring',
    component: ComponentCreator('/blog/Cleanup & Gas Spring', '1b6'),
    exact: true
  },
  {
    path: '/blog/Landing-Gear-Prep',
    component: ComponentCreator('/blog/Landing-Gear-Prep', 'b99'),
    exact: true
  },
  {
    path: '/blog/Part-Numbers',
    component: ComponentCreator('/blog/Part-Numbers', 'ced'),
    exact: true
  },
  {
    path: '/blog/Shelves',
    component: ComponentCreator('/blog/Shelves', '206'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/airframe',
    component: ComponentCreator('/blog/tags/airframe', 'df3'),
    exact: true
  },
  {
    path: '/blog/tags/airplane',
    component: ComponentCreator('/blog/tags/airplane', '040'),
    exact: true
  },
  {
    path: '/blog/tags/landinggear',
    component: ComponentCreator('/blog/tags/landinggear', 'dce'),
    exact: true
  },
  {
    path: '/blog/tags/workspace',
    component: ComponentCreator('/blog/tags/workspace', 'a2c'),
    exact: true
  },
  {
    path: '/blog/Velocity-SE-Purchase',
    component: ComponentCreator('/blog/Velocity-SE-Purchase', '855'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '53a'),
    exact: true
  },
  {
    path: '/Past-Projects',
    component: ComponentCreator('/Past-Projects', '865'),
    exact: true
  },
  {
    path: '/Resume',
    component: ComponentCreator('/Resume', '536'),
    exact: true
  },
  {
    path: '/Velocity-SE',
    component: ComponentCreator('/Velocity-SE', '498'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b32'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '201'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '2cd'),
            routes: [
              {
                path: '/docs/category/past-projects',
                component: ComponentCreator('/docs/category/past-projects', 'd6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/past-projects/3dscanner',
                component: ComponentCreator('/docs/past-projects/3dscanner', '9d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/past-projects/cycloidaldrive',
                component: ComponentCreator('/docs/past-projects/cycloidaldrive', '365'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/past-projects/diyglass',
                component: ComponentCreator('/docs/past-projects/diyglass', '1f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
