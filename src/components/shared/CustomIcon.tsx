import { useEffect, useRef, useState } from 'react';

import { PATHS } from '@/constants';

interface CustomIconProps {
  name: string;
  className?: string;
}

export default function CustomIcon({ name, className = '' }: CustomIconProps) {
  const [loading, setLoading] = useState(true);
  const importedIconRef = useRef<React.FC<
    React.SVGProps<SVGSVGElement>
  > | null>(null);

  useEffect(() => {
    import(`${PATHS.icons}/${name}.svg`)
      .then(({ ReactComponent: Icon }) => {
        importedIconRef.current = Icon;
      })
      .catch(err => {
        throw err;
      })
      .finally(() => {
        setLoading(false);
      });
  }, [name]);

  if (loading) return null;
  if (!importedIconRef.current) return null;
  return <importedIconRef.current className={`w-8 h-8 ${className}`} />;
}
