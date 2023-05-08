import { Outlet } from 'react-router-dom';

import NavBar from './core/NavBar';

function App() {
  return (
    <div className='flex h-screen'>
      <NavBar />
      <main className='grow'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
