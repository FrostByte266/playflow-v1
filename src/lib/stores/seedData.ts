import { readable, get } from 'svelte/store'

import * as IssueEnum from '$lib/types/issueEnums'

import type { IEmployee } from '$lib/types/employee'
import type { IGameIssue } from '$lib/types/game'

export const employees = readable<Array<IEmployee>>([
    {
        ID: 445324,
        name: "John Doe",
        pin: 12345
    },
    {
        ID: 424561,
        name: "Bob Smith",
        pin: 54321
    },
    {
        ID: 347653,
        name: "Sarah Lynn",
        pin: 11111
    }
])

export const gameIssues = readable<Array<IGameIssue>>([
    {
        game: {
            name: "Let's go jungle",
            manufacturer: 'SEGA',
            photo: 'https://example.com'
        },
        description: 'Screen going blank',
        reportedBy: get(employees)[0],
        date: new Date(),
        type: IssueEnum.Type.DOWN,
        state: IssueEnum.Status.CONFIRMED
    },
    {
        game: {
            name: "Bikini Bottom Bowling",
            manufacturer: 'Chicago Gaming Company',
            photo: 'https://example.com'
        },
        description: 'Game does not start when it has been sitting off overnight',
        reportedBy: get(employees)[1],
        date: new Date(),
        type: IssueEnum.Type.NON_CRITICAL,
        state: IssueEnum.Status.CONFIRMED
    }
])
