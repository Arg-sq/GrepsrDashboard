import { Navigate, useRoutes } from 'react-router-dom'
import Layout from '../pages/layout/layout'
import Dashboard from '../pages/dashboard/Dashboard'
import { NAVIGATION_ROUTES } from './routes.constants'
import ErrorBoundary from '../pages/errorBoundary/Errorboundary';
import { Suspense } from 'react';
import { Box, HStack, Progress } from '@chakra-ui/react';

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