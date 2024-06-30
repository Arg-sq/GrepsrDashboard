import { Suspense, lazy } from 'react';
import Layout from "@grepsr/components/layout";
import ErrorBoundary from '@grepsr/components/errorBoundary';
import { Navigate, useRoutes } from 'react-router-dom'
import { NAVIGATION_ROUTES } from './routes.constants'
import SuspenseComponent from '@grepsr/components/suspense';

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
                path: NAVIGATION_ROUTES.DATASETS,
                element: <DataSets />,
              },
              {
                path: NAVIGATION_ROUTES.WORKFLOWS,
                element: <Workflows />,
              },
              {
                path: NAVIGATION_ROUTES.CREDIT_USAGE,
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
            fallback={<SuspenseComponent/>}
          >
            {element}
          </Suspense>
        </ErrorBoundary>
      );
}

export default AppRoutes