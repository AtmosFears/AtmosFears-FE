import {
  type PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

import { type Filter } from '@/types/utils/filters';

type FiltersContextType = {
  availableFilters: Record<string, Filter>;
  appliedFilters: Record<string, Filter>;
  setAppliedFilter?: (filterId: number, filter: Filter | null) => void;
  clearAppliedFilters?: () => void;
};

const FiltersContext = createContext<FiltersContextType>({
  availableFilters: {},
  appliedFilters: {},
  setAppliedFilter: () => {},
  clearAppliedFilters: () => {}
});

export const useFiltersContext = () => {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error('useFiltersContext must be used within a FiltersProvider');
  }

  return context;
};

type FiltersProviderProps = PropsWithChildren<{
  availableFilters: Record<string, Filter>;
  onFilterEnd: (appliedFilters: Record<string, Filter>) => void;
  onFiltersChange?: (appliedFilters: Record<string, Filter>) => void;
  updateTimeout?: number;
}>;

export default function FiltersProvider({
  availableFilters,
  onFilterEnd,
  onFiltersChange = () => {},
  updateTimeout = 500,
  children
}: FiltersProviderProps) {
  const [appliedFilters, setAppliedFilters] = useState<Record<string, Filter>>(
    {}
  );
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const areFiltersAppliedRef = useRef(false);

  useEffect(() => {
    if (areFiltersAppliedRef.current) {
      onFiltersChange(appliedFilters);
    }

    timeoutRef.current = setTimeout(() => {
      onFilterEnd(appliedFilters);
      areFiltersAppliedRef.current = false;
    }, updateTimeout);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [appliedFilters, onFilterEnd, onFiltersChange, updateTimeout]);

  const setAppliedFilter = (filterId: number, filter: Filter | null) => {
    if (filter) {
      setAppliedFilters(prevState => ({ ...prevState, [filterId]: filter }));
      areFiltersAppliedRef.current = true;
    } else {
      setAppliedFilters(({ [filterId]: _, ...rest }) => rest);
    }
  };

  const clearAppliedFilters = () => {
    setAppliedFilters({});
  };

  const filtersContextValue: FiltersContextType = useMemo(
    () => ({
      availableFilters,
      appliedFilters,
      setAppliedFilter,
      clearAppliedFilters
    }),
    [availableFilters, appliedFilters]
  );

  return (
    <FiltersContext.Provider value={filtersContextValue}>
      {children}
    </FiltersContext.Provider>
  );
}
