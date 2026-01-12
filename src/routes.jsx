import React from 'react'
import App from './App'
import Home from './pages/Home'
import NotFound from './components/NotFound'
import { createBrowserRouter } from 'react-router'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import Profile from './pages/Profile'

export const routes = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:'*',
                element: <NotFound />
            },
            {
                path:'/about',
                element:<About />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element: <Register/>
            },
            {
                path:'/profile',
                element: <Profile />
            },
            {
                path:'/dashboard',
                element: <Dashboard />,
                children: [
                    {
                        index: true,
                        element:<Tasks />
                    },
                ]
            }

        ]
    }
])
