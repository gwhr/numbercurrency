import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const _import = require(`./prodev/_import_${process.env.NODE_ENV}`);
export default new Router({
    routes: [{
            path: '/home',
            component: _import('bottom'),
            children:[
                {
                    path: '/home',
                    component: _import('home/home'),
                },
                {
                    path: '/plugin',
                    component: _import('plugin/plugin'),
                },
                {
                    path: '/transactions',
                    component: _import('transactions/transactions'),
                },
                {
                    path: '/quotation',
                    component: _import('quotation/quotation'),
                },
                {
                    path: '/account',
                    component: _import('account/account'),
                },
            ]
        },
        {
            path: '/account',
            component: _import('account/account'),
        },
    ]
})