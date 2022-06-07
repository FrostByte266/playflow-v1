/**
 * Webpack supports code-splitting via () => import(...)
 * You can use it here, and create a separate router config file
 * without it for SSR.
 */

import Router from 'svelte-easyroute'
import UserSelect from '../pages/UserSelect.svelte'
import Home from '../pages/Home.svelte'

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: UserSelect
        },
        {
            path: '/home',
            component: Home,
        }
    ]
})

export default router