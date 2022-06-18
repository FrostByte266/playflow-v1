import axios from 'axios'

import getFullURL from './url'

import type { HydratedDocument } from 'mongoose'
import type { Request } from 'express'

import type { IUpdatableIssue } from "../types/bodies/gameTap"
import type { IGameIssue } from '../db/types/game'

export async function updateIssue(req: Request, gameId: string, issueId: string, updated: IUpdatableIssue): Promise<HydratedDocument<IGameIssue>> {
    console.log(`${getFullURL(req)}/games/${gameId}/issues/${issueId}`)
        const res = await axios.patch(`${getFullURL(req)}/games/${gameId}/issues/${issueId}`, updated)
        return res.data
}

export async function createIssue(req: Request, gameId: string, body: IGameIssue): Promise<HydratedDocument<IGameIssue>> {
    const res = await axios.post(`${getFullURL(req)}/games/${gameId}/issues`, body)
    return res.data
    
}