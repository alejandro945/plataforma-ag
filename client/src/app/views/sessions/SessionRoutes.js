import NotFound from './NotFound'
import ForgotPassword from './ForgotPassword'
import Login from './Login'

const sessionRoutes = [
    {
        path: '/session/login',
        component: Login,
    },
    {
        path: '/session/forgot-password',
        component: ForgotPassword,
    },
    {
        path: '/session/404',
        component: NotFound,
    }
]

export default sessionRoutes
