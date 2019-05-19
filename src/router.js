/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

function load(componentName) {
    return () =>
        import (`./${componentName}.vue`)
}

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            component: load('views/WelcomePage'),
        },
        {
            path: '/home',
            component: Home,
            children: [{
                    path: 'pageOne',
                    name: 'pageOne',
                    component: load('components/PageOne'),
                },
                {
                    path: 'pageTwo',
                    name: 'pageThree',
                    component: load('components/PageTwo')
                },
                {
                    path: 'pageTwo/:parameter',
                    name: 'pageTwoWithParameters',
                    component: load('components/PageTwo')
                },
                {
                    path: 'pageThree',
                    name: 'pageThree',
                    component: load('components/PageThree')
                }
            ]
        },
    ],
});