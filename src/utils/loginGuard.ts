import type Router from 'svelte-easyroute'
import type { IEmployee } from '../types/employee'

export default function enforceLogin(storeVal: IEmployee | undefined, router: Router) {
    if(!storeVal) {
        router.push('/login')
    }
}