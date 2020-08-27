import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const _import = require(`./prodev/_import_${process.env.NODE_ENV}`);
export default new Router({
    routes: [
        { path: '/', redirect: { path: '/home' }},
        {  
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
            path: '/acticleDetails',
            component: _import('home/acticleDetails'),
        },
        {
            path: '/myassets',
            component: _import('account/myassets'),
        },
        {
            path: '/withdrawal',
            component: _import('account/withdrawal'),
        },
        {
            path: '/promote',
            component: _import('account/promote'),
        },
        {
            path: '/authentication',
            component: _import('account/authentication'),
        },
        {
            path: '/aboutAs',
            component: _import('account/aboutAs'),
        },
        {
            path: '/communication',
            component: _import('account/communication'),
        },
        {
            path: '/version',
            component: _import('account/version'),
        },
        {
            path: '/payment',
            component: _import('account/payment'),
        },
        {
            path: '/news',
            component: _import('home/news'),
        },
        {
            path: '/deposit',
            component: _import('home/deposit'),
        },
        {
            path: '/depositRecord',
            component: _import('record/depositRecord'),
        },
        {
            path: '/exchange',
            component: _import('home/exchange'),
        },
        {
            path: '/exchange2',
            component: _import('home/exchange2'),
        },
        {
            path: '/profitRecord',
            component: _import('record/profitRecord'),
        },
        {
            path: '/moneyFilling',
            component: _import('home/moneyFilling'),
        },
        {
            path: '/moneyFillRecord',
            component: _import('record/moneyFillRecord'),
        },
        {
            path: '/login',
            component: _import('login/login'),
        },
        {
            path: '/register',
            component: _import('login/register'),
        },
        {
            path: '/seekword',
            component: _import('login/seekword'),
        },
        {
            path: '/articleDetails',
            component: _import('home/articleDetails'),
        },
        {
            path: '/addBank',
            component: _import('account/addBank'),
        },
        {
            path: '/setting',
            component: _import('account/setting'),
        },
        {
            path: '/changePwd',
            component: _import('account/changePwd'),
        },
        {
            path: '/changPassword',
            component: _import('account/changPassword'),
        },
        {
            path: '/changenickname',
            component: _import('account/changenickname'),
        },
        {
            path: '/changeavatar',
            component: _import('account/changeavatar'),
        },
        {
            path: '/questionList',
            component: _import('account/questionList'),
        },
        {
            path: '/quertionDetails',
            component: _import('account/quertionDetails'),
        },
    ]
})