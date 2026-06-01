import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { Home } from './pages/Home';
import { GAIM } from './pages/GAIM';
import { AIBusinessTransformation } from './pages/AIBusinessTransformation';
import { VentureBuilder } from './pages/VentureBuilder';
import { AIProducts } from './pages/AIProducts';
import { Squads } from './pages/Squads';
import { Cases } from './pages/Cases';
import { Diagnostico } from './pages/Diagnostico';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'gaim', Component: GAIM },
      { path: 'ai-business-transformation', Component: AIBusinessTransformation },
      { path: 'venture-builder', Component: VentureBuilder },
      { path: 'ai-products', Component: AIProducts },
      { path: 'squads', Component: Squads },
      { path: 'cases', Component: Cases },
      { path: 'diagnostico', Component: Diagnostico },
    ],
  },
]);
