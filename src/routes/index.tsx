import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import { Applications, CalendarPage, Dashboard, Landing, Login, Notices, Queries, SignUp, SingleApplication } from '../pages'
import { PrivateRoute } from '../utils/PrivateRoute'

function routeCheckWrapper (element: React.ReactNode): JSX.Element {
  return <PrivateRoute>
        {element}
    </PrivateRoute>
}

export const Routes = (): JSX.Element | null => {
  return useRoutes([
    {
      path: '/',
      element: <Landing />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/adm/',
      element: routeCheckWrapper(<Dashboard />)
    },
    {
      path: '/adm/applications',
      element: routeCheckWrapper(<Applications />)
    },
    {
      path: '/adm/applications/:ApplicationId',
      element: routeCheckWrapper(<SingleApplication />)
    },
    {
      path: '/adm/calendar',
      element: routeCheckWrapper(<CalendarPage />)
    },
    {
      path: '/adm/queries',
      element: routeCheckWrapper(<Queries />)
    },
    {
      path: '/adm/notices',
      element: routeCheckWrapper(<Notices />)
    },
    {
      path: '*',
      element: <Navigate to='/adm/' replace/>
    }
  ])
}
