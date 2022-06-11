import type { IEmployee } from './employee'
import type * as Issue from './issueEnums'

export interface IGame {
    name: string,
    manufacturer: string,
    photo: string
}

export interface IGameIssue {
    game: IGame,
    description: string,
    reportedBy: IEmployee,
    date: Date,
    type: Issue.Type,
    state: Issue.Status
}