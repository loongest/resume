import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/resume/markdown-page',
    component: ComponentCreator('/resume/markdown-page', '247'),
    exact: true
  },
  {
    path: '/resume/docs',
    component: ComponentCreator('/resume/docs', '2e0'),
    routes: [
      {
        path: '/resume/docs',
        component: ComponentCreator('/resume/docs', '610'),
        routes: [
          {
            path: '/resume/docs',
            component: ComponentCreator('/resume/docs', '2a4'),
            routes: [
              {
                path: '/resume/docs/codeomitted',
                component: ComponentCreator('/resume/docs/codeomitted', 'ba4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resume/docs/ddbill',
                component: ComponentCreator('/resume/docs/ddbill', 'ce0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resume/docs/f-secure',
                component: ComponentCreator('/resume/docs/f-secure', '27c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resume/docs/freelance',
                component: ComponentCreator('/resume/docs/freelance', '12a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resume/docs/intro',
                component: ComponentCreator('/resume/docs/intro', '85e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resume/docs/radiant-digital',
                component: ComponentCreator('/resume/docs/radiant-digital', 'f2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resume/docs/travelog',
                component: ComponentCreator('/resume/docs/travelog', 'd2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resume/docs/vsi',
                component: ComponentCreator('/resume/docs/vsi', '854'),
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
    path: '/resume/',
    component: ComponentCreator('/resume/', '53a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
