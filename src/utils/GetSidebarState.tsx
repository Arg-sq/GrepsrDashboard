import { SidebarState } from '@grepsr/hooks/useSidebarContext';
import { useContext } from 'react';

export const GetSidebarState = () => {
  const sidebarOpen = useContext(SidebarState);
  return sidebarOpen as {
    showSidebar: boolean;
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  };
};
