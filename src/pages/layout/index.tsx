import { Suspense } from "react";
import Sidebar from "@grepsr/pages/sidebar";
import { Outlet } from "react-router-dom";
import { Box, HStack, Progress } from "@chakra-ui/react";
import ErrorBoundary from "../errorBoundary";

const Layout = () => {
  return (
    <Box>
      <Sidebar />
      <Box
        as="main"
        pt={"13px"}
        pb={"17px"}
        px={"25px"}
        ml={"240px"}
        maxW={"100dvw"}
      >
        <ErrorBoundary>
          <Suspense
            fallback={
              <HStack justifyContent="center" alignItems="center" h="100dvh">
                <Box width={"100dvw"} height={"100dvh"}>
                  <Progress size="xs" isIndeterminate hasStripe />
                </Box>
              </HStack>
            }
          >
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </Box>
    </Box>
  );
};

export default Layout;
