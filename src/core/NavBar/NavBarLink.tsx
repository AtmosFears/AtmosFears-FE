import { type PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

type NavBarLinkProps = PropsWithChildren<{
  to: string;
  // text: string;
  icon: React.ReactNode;
  expanded: boolean;
}>;

export default function NavBarLink({
  to,
  icon,
  expanded,
  children
}: NavBarLinkProps) {
  return (
    <NavLink
      to={to}
      className={`flex items-center bg-gray-700 h-12 shadow-sm ${
        expanded ? 'w-full pl-3 rounded-lg' : 'justify-center w-12 rounded-full'
      }`}>
      <div className='w-8 h-8 flex items-center justify-center'>{icon}</div>
      {expanded && (
        <span className='ml-3 text-white uppercase tracking-wide'>
          {children}
        </span>
      )}
    </NavLink>
  );
}
