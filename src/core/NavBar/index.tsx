import { useState } from 'react';
import { MdAvTimer, MdSensors, MdSsidChart } from 'react-icons/md';
import { RiMenuFoldLine, RiMenuUnfoldLine } from 'react-icons/ri';

import CustomIcon from '@/components/shared/CustomIcon';

import ActiveItemIndicator from './ActiveLinkIndicator';
import NavBarLink from './NavBarLink';

const LINKS = [
  {
    to: 'spatial-air-vis',
    icon: <MdSensors className='w-8 h-8' />,
    text: 'Odczyty z sensorów'
  },
  {
    to: 'avg-time-reports',
    icon: <MdAvTimer className='w-7 h-7' />,
    text: 'Raporty czasowe'
  },
  {
    to: 'time-series',
    icon: <MdSsidChart className='w-7 h-7' />,
    text: 'Wykresy'
  },
  {
    to: 'wind-rose',
    icon: <CustomIcon name='wind-rose' className='w-8 h-8 fill-inherit' />,
    text: 'Róża wiatrów'
  }
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const MenuIcon = open ? RiMenuFoldLine : RiMenuUnfoldLine;

  return (
    <nav
      className={`fixed z-20 top-0 left-0 bottom-0 w-20 dark:bg-gray-900 drop-shadow-xl py-8 flex flex-col justify-between gap-8 transition-all ${
        open ? 'w-80' : ''
      }`}>
      <section className='flex flex-col gap-16 w-full'>
        {/* Open wide navigation button */}
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className='w-12 h-12 flex-center mx-4'>
          <MenuIcon className='w-8 h-8 text-primaryLight' />
        </button>
        {/* Navigation */}
        <div className='relative'>
          <ActiveItemIndicator
            linksCount={LINKS.length}
            activeLinkIndex={activeItemIndex}
          />
          <div className='h-max flex flex-col items-center gap-4 w-full px-4'>
            {LINKS.map(({ to, icon, text }, index) => (
              <NavBarLink
                key={to}
                to={to}
                icon={icon}
                text={text}
                expanded={open}
                onActive={() => {
                  setActiveItemIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </nav>
  );
}
