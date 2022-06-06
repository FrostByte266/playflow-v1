/**
 * Webpack supports code-splitting via () => import(...)
 * You can use it here, and create a separate router config file
 * without it for SSR.
 */

import Router from 'svelte-easyroute'
import UserSelect from '../components/UserSelect.svelte'
import PinEntry from '../components/PinEntry.svelte'

const routes = [
    {
        path: '/login',
        component: UserSelect
    },
    {
        path: '/pin',
        component: PinEntry
    }
]

const router = new Router({
    mode: 'history',
    routes
})

export default router