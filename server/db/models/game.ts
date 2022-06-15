import { Schema, model } from 'mongoose'
import type { IGame } from '../types/game.d'
import { GameIssueSchema } from './issue'

const GameSchema = new Schema<IGame>({
    name: { type: String, required: true },
    playerCount: { type: Number, required: true },
    manufacturer: { type: String, required: true },
    photo: { type: String, required: true },
    issues: [GameIssueSchema]
})

export default model('Game', GameSchema)