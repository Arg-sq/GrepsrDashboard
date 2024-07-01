import React from 'react';
import { Suspense, useEffect, useMemo, useState } from 'react';
import Sidebar from '@grepsr/components/sidebar';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import ErrorBoundary from '@grepsr/components/errorBoundary';
import SuspenseComponent from '@grepsr/components/suspense';
import Header from '@grepsr/components/header';
import useWindowReSize from '@grepsr/hooks/useWindowResize';
import { SidebarState } from '@grepsr/hooks/useSidebarContext';

const LAYOUT_WIDTHS = {
  LARGE: '242px',
  SMALL: '80px'
};

const Layout = () => {
  const { width } = useWindowReSize();
  const [showSidebar, setShowSidebar] = useState(true);

  // Update the sidebar state based on the window width
  useEffect(() => {
    if (width < 640) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  }, [width]);

  // Calculate the current sidebar width based on its collapsed state and hovered state
  const sidebarWidth = useMemo(
    () => (showSidebar ? LAYOUT_WIDTHS.LARGE : LAYOUT_WIDTHS.SMALL),
    [showSidebar]
  );

  return (
    <Box w={'100dvw'}>
      <SidebarState.Provider value={{ showSidebar, setShowSidebar }}>
        <Sidebar sidebarWidth={sidebarWidth} />
        <Box ml={showSidebar ? '240px' : '80px'}>
          <ErrorBoundary>
            <Suspense fallback={<SuspenseComponent />}>
              <Header />
              <Box as="main" pt={3} pb={4} px={6} transition={'0.4s ease-in-out'}>
                <Outlet />
              </Box>
            </Suspense>
          </ErrorBoundary>
        </Box>
      </SidebarState.Provider>
    </Box>
  );
};

export default Layout;
