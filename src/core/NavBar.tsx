import { BsGear } from 'react-icons/bs';

import CustomIcon from '@/components/custom/CustomIcon';

export default function NavBar() {
  return (
    <nav
      className='fixed top-0 left-0 h-screen w-16 flex flex-col items-center
                  pt-8 bg-white dark:bg-gray-900 drop-shadow-xl gap-4'>
      <CustomIcon name='wind-rose' className='w-8 h-8 fill-white' />
      <BsGear className='w-7 h-7 text-white' />
    </nav>
  );
}
