import { Admin } from './pages/Admin'
import { Auth } from './pages/Auth'
import { Catalog } from './pages/Catalog'
import { ObjectPage } from './pages/ObjectPage'
import { Top } from './pages/Top'

export const authRoutes = [
    {
        path: '/admin',
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: '/',
        Component: Catalog
    },
    {
        path: '/top',
        Component: Top
    },
    {
        path: '/login',
        Component: Auth
    },
    {
        path: '/registration',
        Component: Auth
    },
    {
        path: '/object/:id',
        Component: ObjectPage
    }
]