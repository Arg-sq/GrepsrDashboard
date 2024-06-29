import { Suspense, lazy } from 'react';
import Layout from "@grepsr/pages/layout";
import ErrorBoundary from '@grepsr/pages/errorBoundary';
import { Box, HStack, Progress } from '@chakra-ui/react';
import { Navigate, useRoutes } from 'react-router-dom'
import { NAVIGATION_ROUTES } from './routes.constants'

const Dashboard =lazy(()=>import("@grepsr/pages/dashboard"))
const DataSets =lazy(()=>import("@grepsr/pages/datasets"))
const CreditUsage =lazy(()=>import("@grepsr/pages/creditUsage"))
const Workflows =lazy(()=>import("@grepsr/pages/workflows"))

const AppRoutes = () => {
    const isAuthenticated = true;

    const adminRoutes=[
        {
            path: NAVIGATION_ROUTES.BASE,
            element: <Layout/>,
            children: [
              {
                index: true,
                element: <Dashboard />,
              },
              {
                index: NAVIGATION_ROUTES.DATASETS,
                element: <DataSets />,
              },
              {
                index: NAVIGATION_ROUTES.WORKFLOWS,
                element: <Workflows />,
              },
              {
                index: NAVIGATION_ROUTES.CREDIT_USAGE,
                element: <CreditUsage />,
              },
        
     
            ],
          },
        
          {
            path: NAVIGATION_ROUTES.NO_MATCH,
            element: <Navigate to={NAVIGATION_ROUTES.DASHBOARD} replace />,
          },
    ]

    const openRoutes=[
        {
            path:NAVIGATION_ROUTES.LOGIN,
            element:<p>Login page component here</p>
        },
        {
            path: NAVIGATION_ROUTES.NO_MATCH,
            element: <Navigate to={NAVIGATION_ROUTES.LOGIN} replace />,
          },
    ]
    const element = useRoutes(
        isAuthenticated ? adminRoutes : openRoutes
      );

      return (
        <ErrorBoundary>
          <Suspense
            fallback={
              <HStack justifyContent="center" h="100dvh" w="100dvw">
                <Box width={"100dvw"} height={"100dvh"}>
                  <Progress size="xs" isIndeterminate hasStripe />
                </Box>
              </HStack>
            }
          >
            {element}
          </Suspense>
        </ErrorBoundary>
      );
}

export default AppRoutes