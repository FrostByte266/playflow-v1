import type { IEmployee } from './employee'
import type * as Issue from './enums/issue'

import type { Types } from 'mongoose'

export interface IGameIssue {
    description: string,
    reportedBy: IEmployee,
    date: Date,
    type: Issue.Type,
    state: Issue.Status
}
export interface IGame {
    name: string,
    playerCount: number,
    manufacturer: string,
    photo: string,
    issues: Types.DocumentArray<IGameIssue>
}

