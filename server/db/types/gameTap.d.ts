import type { TapTimes } from './enums/gameTap'
import type { IEmployee } from './employee'
import type { IGame } from './game'

export interface IGameTap {
    date: Date,
    time: TapTimes,
    performedBy: IEmployee,
    tappedGames: Array<IGame>
}