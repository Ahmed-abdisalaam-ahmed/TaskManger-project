import React from 'react'
import App from './App'
import Home from './pages/Home'
import NotFound from './components/NotFound'
import { createBrowserRouter } from 'react-router'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import Profile from './pages/Profile'
import UnAuthitecationRouter from './components/UnAuthitecationRouter'
import Overview from './pages/Dashboard/Overview'
import ProtectedRoute from './components/ProtectedRouter'
import AiAssistant from './pages/Dashboard/AiAssistant'
import TaskList from './pages/Dashboard/TaskList'
import CreateTasks from './pages/Dashboard/CreateTasks'

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
                element:<UnAuthitecationRouter children={<Login />}/>
            },
            {
                path:'/register',
                element: <UnAuthitecationRouter children={<Register />}/>
            },
            {
                path:'/profile',
                element: <ProtectedRoute children={<Profile />}/>
            },
            {
                path:'/dashboard',
                element: <ProtectedRoute children={<Dashboard />}/>,
                children: [
                    {
                        index: true,
                        element:<Overview />
                    },
                    {
                        path:'taskList',
                        element: <TaskList />
                    },
                    {
                        path:'create-Tasks',
                        element: <CreateTasks />
                    },
                    {
                        path:'aiBots',
                        element:<AiAssistant />
                    },
                                        {
                        path:'settings',
                        element:<Profile />
                    },

                ]
            }

        ]
    }
])
