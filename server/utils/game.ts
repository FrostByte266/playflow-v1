import type { HydratedDocument } from 'mongoose'
import type { IGame } from '../db/types/game'

export async function nextGame(gameId: string): Promise<HydratedDocument<IGame | null>> {
    const res = await fetch(`/games/${gameId}/next`)
    return await res.json()
}