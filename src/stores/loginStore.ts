import { writable } from 'svelte/store'
import type { IEmployee } from '../types/employee'

export const currentUser = writable<IEmployee>()

export const authToken = writable<string>()