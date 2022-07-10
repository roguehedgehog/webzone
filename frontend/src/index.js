import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Dashboard from './dashboard/Dashboard';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Dashboard />,
);
