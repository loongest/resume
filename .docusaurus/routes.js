import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/resume/__docusaurus/debug/',
    component: ComponentCreator('/resume/__docusaurus/debug/', '942'),
    exact: true
  },
  {
    path: '/resume/__docusaurus/debug/config/',
    component: ComponentCreator('/resume/__docusaurus/debug/config/', '023'),
    exact: true
  },
  {
    path: '/resume/__docusaurus/debug/content/',
    component: ComponentCreator('/resume/__docusaurus/debug/content/', 'e69'),
    exact: true
  },
  {
    path: '/resume/__docusaurus/debug/globalData/',
    component: ComponentCreator('/resume/__docusaurus/debug/globalData/', 'd8a'),
    exact: true
  },
  {
    path: '/resume/__docusaurus/debug/metadata/',
    component: ComponentCreator('/resume/__docusaurus/debug/metadata/', '735'),
    exact: true
  },
  {
    path: '/resume/__docusaurus/debug/registry/',
    component: ComponentCreator('/resume/__docusaurus/debug/registry/', '347'),
    exact: true
  },
  {
    path: '/resume/__docusaurus/debug/routes/',
    component: ComponentCreator('/resume/__docusaurus/debug/routes/', '7ee'),
    exact: true
  },
  {
    path: '/resume/docs/',
    component: ComponentCreator('/resume/docs/', '4d8'),
    routes: [
      {
        path: '/resume/docs/',
        component: ComponentCreator('/resume/docs/', '352'),
        routes: [
          {
            path: '/resume/docs/',
            component: ComponentCreator('/resume/docs/', '78e'),
            routes: [
              {
                path: '/resume/docs/codeomitted/',
                component: ComponentCreator('/resume/docs/codeomitted/', '082'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resume/docs/ddbill/',
                component: ComponentCreator('/resume/docs/ddbill/', '27f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resume/docs/f-secure/',
                component: ComponentCreator('/resume/docs/f-secure/', '8d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resume/docs/freelance/',
                component: ComponentCreator('/resume/docs/freelance/', '32f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resume/docs/intro/',
                component: ComponentCreator('/resume/docs/intro/', '498'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resume/docs/radiant-digital/',
                component: ComponentCreator('/resume/docs/radiant-digital/', '9cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resume/docs/travelog/',
                component: ComponentCreator('/resume/docs/travelog/', 'd7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resume/docs/vsi/',
                component: ComponentCreator('/resume/docs/vsi/', 'f73'),
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
