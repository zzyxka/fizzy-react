// App.tsx
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

export default function App (): React.ReactElement<any, any> {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}
