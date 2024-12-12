import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/resume/__docusaurus/debug',
    component: ComponentCreator('/resume/__docusaurus/debug', 'ad7'),
    exact: true
  },
  {
    path: '/resume/__docusaurus/debug/config',
    component: ComponentCreator('/resume/__docusaurus/debug/config', '1c5'),
    exact: true
  },
  {
    path: '/resume/__docusaurus/debug/content',
    component: ComponentCreator('/resume/__docusaurus/debug/content', 'bda'),
    exact: true
  },
  {
    path: '/resume/__docusaurus/debug/globalData',
    component: ComponentCreator('/resume/__docusaurus/debug/globalData', '4b1'),
    exact: true
  },
  {
    path: '/resume/__docusaurus/debug/metadata',
    component: ComponentCreator('/resume/__docusaurus/debug/metadata', '5b9'),
    exact: true
  },
  {
    path: '/resume/__docusaurus/debug/registry',
    component: ComponentCreator('/resume/__docusaurus/debug/registry', '54f'),
    exact: true
  },
  {
    path: '/resume/__docusaurus/debug/routes',
    component: ComponentCreator('/resume/__docusaurus/debug/routes', 'd7f'),
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
