import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

import ErrorPage from '@/pages/ErrorPage';

import Root from './Root';
import {
  AverageTimeReportsPage,
  ModCalPage,
  SpatialAirVisPage,
  TimeSeriesPage,
  WindRosePage
} from './pages';
import './scss/main.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<SpatialAirVisPage />} />
      <Route path='map' element={<SpatialAirVisPage />} />
      <Route path='cal' element={<ModCalPage />} />
      <Route path='time-series' element={<TimeSeriesPage />} />
      <Route path='spatial-air-vis' element={<AverageTimeReportsPage />} />
      <Route path='wind-rose' element={<WindRosePage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
