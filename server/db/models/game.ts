import { Schema, model } from 'mongoose'
import type { IGame } from '../types/game.d'
import { GameIssueSchema } from './issue'

const GameSchema = new Schema<IGame>({
    name: String,
    playerCount: Number,
    manufacturer: String,
    photo: String,
    issues: [GameIssueSchema]
})

export default model('Game', GameSchema)