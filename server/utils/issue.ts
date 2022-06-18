import type { HydratedDocument } from 'mongoose'

import type { IUpdatableIssue } from "../types/bodies/gameTap"
import type { IGameIssue } from '../db/types/game'

export async function updateIssue(gameId: string, issueId: string, updated: IUpdatableIssue): Promise<HydratedDocument<IGameIssue>> {
    const res = await fetch(`/games/${gameId}/issues/${issueId}`, {
        method: 'PATCH',
        body: JSON.stringify(updated)
    })
    return await res.json()
}

export async function createIssue(gameId: string, body: IGameIssue): Promise<HydratedDocument<IGameIssue>> {
    const res = await fetch(`/games/${gameId}/issues`, {
        method: 'POST',
        body: JSON.stringify(body)
    })
    return await res.json()
}