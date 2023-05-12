import { Outlet } from 'react-router-dom';

import NavBar from './core/NavBar';

export default function Root() {
  return (
    <div className='h-screen'>
      <NavBar />
      <main className='relative ml-20 h-screen z-0'>
        <Outlet />
      </main>
    </div>
  );
}
