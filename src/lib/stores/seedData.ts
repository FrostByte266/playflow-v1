import { readable, get } from 'svelte/store'

import * as IssueEnum from '$lib/types/enums/issue'
import { Roles } from '$lib/types/enums/employee'

import type { IEmployee } from '$lib/types/employee'
import type { IGame, IGameIssue } from '$lib/types/game'

export const employees = readable<Array<IEmployee>>([
    {
        ID: 445324,
        name: "John Doe",
        pin: 12345,
        role: Roles.TECH
    },
    {
        ID: 424561,
        name: "Bob Smith",
        pin: 54321,
        role: Roles.MANAGER
    },
    {
        ID: 347653,
        name: "Sarah Lynn",
        pin: 11111,
        role: Roles.CAST_MEMBER
    }
])

export const games = readable<Array<IGame>>([
    {
        name: "Let's go jungle",
        manufacturer: 'SEGA',
        photo: 'https://www.spttechsupport.com/uploads/6/9/3/7/69377421/9790329.jpg?372'
    },
    {
        name: "Bikini Bottom Bowling",
        manufacturer: 'Chicago Gaming Company',
        photo: 'https://www.spttechsupport.com/uploads/6/9/3/7/69377421/7181044.jpg?371'
    }
])

export const gameIssues = readable<Array<IGameIssue>>([
    {
        game: get(games)[0],
        description: 'Screen going blank',
        reportedBy: get(employees)[0],
        date: new Date(),
        type: IssueEnum.Type.DOWN,
        state: IssueEnum.Status.CONFIRMED
    },
    {
        game: get(games)[1],
        description: 'Game does not start when it has been sitting off overnight',
        reportedBy: get(employees)[1],
        date: new Date(),
        type: IssueEnum.Type.NON_CRITICAL,
        state: IssueEnum.Status.CONFIRMED
    }
])
