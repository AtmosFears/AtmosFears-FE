import { useState } from 'react';
import {
  MdSensors,
  MdSettings,
  MdSettingsInputAntenna,
  MdSsidChart
} from 'react-icons/md';
import { RiMenuFoldLine, RiMenuUnfoldLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import CustomIcon from '@/components/custom/CustomIcon';

// TODO - improve menu styles (in the next PR)
export default function NavBar() {
  const [open, setOpen] = useState(false);

  const MenuIcon = open ? RiMenuFoldLine : RiMenuUnfoldLine;

  return (
    <nav
      className='w-16 h-screen overflow-hidden
                  bg-white dark:bg-gray-900 drop-shadow-xl px-4 py-8 flex flex-col items-center justify-between gap-8'>
      <section className='flex flex-col gap-16'>
        {/* Open wide navigation button */}
        <button
          onClick={() => {
            setOpen(!open);
          }}>
          <MenuIcon className='w-7 h-7 text-white' />
        </button>
        {/* Navigation */}
        <ul className='h-max flex flex-col items-center gap-8'>
          <li>
            <Link to='map'>
              <MdSensors className='w-8 h-8 text-white' />
            </Link>
          </li>
          <li>
            {/* TODO - change this endpoint name */}
            <Link to='cal'>
              <MdSettingsInputAntenna className='w-7 h-7 text-white' />
            </Link>
          </li>
          <li>
            <Link to='time-series'>
              <MdSsidChart className='w-7 h-7 text-white' />
            </Link>
          </li>
          <li>
            <Link to='time-series'>
              <MdSsidChart className='w-7 h-7 text-white' />
            </Link>
          </li>
          <li>
            <Link to='wind-rose'>
              <CustomIcon name='wind-rose' className='w-8 h-8 fill-white' />
            </Link>
          </li>
        </ul>
      </section>
      {/* Settings */}
      <button // TODO - implement settings
        onClick={() => {
          console.log('open settings');
        }}>
        <MdSettings className='w-7 h-7 text-white' />
      </button>
    </nav>
  );
}
