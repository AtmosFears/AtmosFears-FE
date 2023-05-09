import { NavLink } from 'react-router-dom';

import NavBarLinkFlyout from './NavBarLinkFlyout';

interface NavBarLinkProps {
  to: string;
  text: string;
  icon: React.ReactNode;
  expanded: boolean;
  onActive: () => void;
}

export default function NavBarLink({
  to,
  icon,
  text,
  expanded,
  onActive
}: NavBarLinkProps) {
  return (
    <NavLink
      to={to}
      className={`relative h-12 shadow-sm group ${
        expanded ? 'w-full' : 'w-12'
      }`}>
      {({ isActive }) => {
        if (isActive) {
          setTimeout(() => {
            onActive();
          }, 0);
        }

        return (
          <>
            <div
              className={`flex-center w-full h-full bg-gray-700 transition-all overflow-hidden hover:bg-gray-800 ${
                isActive ? 'bg-gray-800' : ''
              } ${expanded ? 'rounded-lg' : 'rounded-full'}`}>
              <div
                className={`w-12 h-12 flex-center transition-all ${
                  isActive
                    ? 'text-white fill-white'
                    : 'text-primaryLight fill-primaryLight'
                } ${expanded ? 'px-3' : ''}`}>
                {icon}
              </div>
              <span
                className={`text-white uppercase tracking-wide whitespace-nowrap ${
                  expanded ? 'ml-1 w-full' : 'w-0'
                }`}>
                {text}
              </span>
            </div>
            {!expanded && <NavBarLinkFlyout text={text} />}
          </>
        );
      }}
    </NavLink>
  );
}
