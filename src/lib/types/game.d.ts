import type { IEmployee } from './employee'
import type * as Issue from './enums/issue'

export interface IGame {
    name: string,
    playerCount: number,
    manufacturer: string,
    photo: string,
    cardTapPosition: number,
    _id: string
}

export interface IGameIssue {
    game: IGame,
    description: string,
    reportedBy: IEmployee,
    date: Date,
    type: Issue.Type,
    state: Issue.Status
}