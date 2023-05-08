import { useState } from 'react';
import {
  MdSensors,
  MdSettings,
  MdSettingsInputAntenna,
  MdSsidChart
} from 'react-icons/md';
import { RiMenuFoldLine, RiMenuUnfoldLine } from 'react-icons/ri';

import CustomIcon from '@/components/custom/CustomIcon';

import NavBarLink from './NavBarLink';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const MenuIcon = open ? RiMenuFoldLine : RiMenuUnfoldLine;

  return (
    <nav
      className={`w-16 h-screen overflow-hidden
                  bg-white dark:bg-gray-900 drop-shadow-xl px-4 py-8 flex flex-col  justify-between gap-8 ${
                    open ? 'w-80' : ''
                  }`}>
      <section className='flex flex-col gap-16 w-full'>
        {/* Open wide navigation button */}
        <button
          onClick={() => {
            setOpen(!open);
          }}>
          <MenuIcon className='w-8 h-8 text-primaryLight' />
        </button>
        {/* Navigation */}
        <div className='h-max flex flex-col items-center gap-4 w-full'>
          <NavBarLink
            to='map'
            icon={<MdSensors className='w-8 h-8 text-primaryLight' />}
            expanded={open}>
            Dane pomiarowe
          </NavBarLink>
          {/* TODO - change this endpoint name */}
          <NavBarLink
            to='cal'
            icon={
              <MdSettingsInputAntenna className='w-7 h-7 text-primaryLight' />
            }
            expanded={open}>
            Mod cal (change name)
          </NavBarLink>
          <NavBarLink
            to='time-series'
            icon={<MdSsidChart className='w-7 h-7 text-primaryLight' />}
            expanded={open}>
            Wykresy
          </NavBarLink>
          <NavBarLink
            to='wind-rose'
            icon={
              <CustomIcon
                name='wind-rose'
                className='w-8 h-8 fill-primaryLight'
              />
            }
            expanded={open}>
            Róża wiatrów
          </NavBarLink>
        </div>
      </section>
      {/* Settings */}
      <button // TODO - implement settings
        onClick={() => {
          console.log('open settings');
        }}>
        <MdSettings className='w-8 h-8 text-primaryLight' />
      </button>
    </nav>
  );
}
