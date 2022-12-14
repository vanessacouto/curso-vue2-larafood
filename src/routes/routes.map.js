import Home from '@/pages/Home';
import Products from '@/pages/Products';
import Cart from '@/pages/Cart';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';

// define todas as rotas do projeto e seus templates
const routes = [
    {
        path: '/',
        component: () => import('@/layouts/DefaultTemplate'),
        children: [ // todos as rotas de children usarão o DefaultTemplate
            {
                path: '/carrinho',
                component: Cart,
                name: 'cart'
            },
            {
                path: '/loja',
                component: Products,
                name: 'products'
            },
            {
                path: '/',
                component: Home,
                name: 'home'
            },
        ]
    },
    {
        path: '/',
        component: () => import('@/layouts/AuthTemplate'),
        children: [
            {
                path: '/entrar',
                component: Login,
                name: 'login'
            },
            {
                path: '/cadastrar',
                component: Register,
                name: 'register'
            },
        ]
    }
]

export default routes