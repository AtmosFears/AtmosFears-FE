import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

import ErrorPage from '@/pages/core/ErrorPage';

import Root from './Root';
import {
  AverageTimeReportsPage,
  SpatialAirVisPage,
  TimeSeriesPage,
  WindRosePage
} from './pages';
import NotFoundPage from './pages/core/NotFoundPage';
import './scss/main.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<SpatialAirVisPage />} />
      <Route path='spatial-air-vis' element={<SpatialAirVisPage />} />
      <Route path='time-series' element={<TimeSeriesPage />} />
      <Route path='avg-time-reports' element={<AverageTimeReportsPage />} />
      <Route path='wind-rose' element={<WindRosePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
