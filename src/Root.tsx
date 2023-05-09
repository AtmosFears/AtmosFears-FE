import { Outlet } from 'react-router-dom';

import NavBar from './core/NavBar';

export default function Root() {
  return (
    <div className='flex h-screen'>
      <NavBar />
      <main className='grow'>
        <Outlet />
      </main>
    </div>
  );
}
