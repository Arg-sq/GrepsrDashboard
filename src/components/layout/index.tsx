import { Suspense } from "react";
import Sidebar from "@grepsr/components/sidebar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import ErrorBoundary from "@grepsr/components/errorBoundary";
import SuspenseComponent from "@grepsr/components/suspense";
import Header from "@grepsr/components/header";

const Layout = () => {
  return (
    <Box 
    w={"100dvw"}
    >
      <Sidebar />
      <Box 
            ml={"240px"}
            >
        <ErrorBoundary>
          <Suspense
            fallback={<SuspenseComponent/>}
          >
        <Header/>
        <Box
            as="main"
            pt={3}
            pb={4}
            px={6}
        >
            <Outlet />
        </Box>
          </Suspense>
        </ErrorBoundary>
      </Box>
    </Box>
  );
};

export default Layout;
