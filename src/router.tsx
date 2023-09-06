// router.tsx
import React from 'react';
import { createHashRouter } from 'react-router-dom';
import Layout from './layout/Index';
import Home from './pages/home/Index';
import routeConfig from '@@/routeConfig';

export default createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      ...routeConfig
    ]
  }
]);
