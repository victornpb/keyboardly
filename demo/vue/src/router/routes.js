
import Home from '../pages/Home.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/galery',
        name: 'Galery',
        component: () => import(/* webpackChunkName: "galery" */ '@/pages/galery/index.vue')
    },
    {
        path: '/things',
        name: 'Things',
        component: () => import(/* webpackChunkName: "things" */ '@/pages/things/index.vue')
    },
    {
        path: '/inbox',
        name: 'Inbox',
        component: () => import(/* webpackChunkName: "inbox" */ '@/pages/inbox/index.vue')
    },
    {
        path: '/table',
        name: 'Table',
        component: () => import(/* webpackChunkName: "table" */ '@/pages/table/index.vue')
    },
    {
        path: '/drag',
        name: 'Drag',
        component: () => import(/* webpackChunkName: "drag" */ '@/pages/drag/index.vue')
    },
];

export default routes;