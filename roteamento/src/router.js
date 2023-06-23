import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './components/HomePg.vue';
import UserIndex from './components/UserIndex.vue';
import UserDetails from './components/UserDetails.vue';

Vue.use(Router);

export default new Router ({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'inicio',
        component: HomePage
    },
    {
        path: '/usuario',
        name: 'usuario',
        component: UserIndex,
        children: [
            {
                path: ':id',
                component: UserDetails,
                props: true
            }
        ]
    },
    {
        path: '/redirecionar',
        redirect: '/usuario',
    },
    {
        path: '*',
        redirect: '/404'
    },
    {
        path: '/404',
        component: HomePage
    }
]
})