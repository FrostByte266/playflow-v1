import { Schema, model } from 'mongoose'
import type { IGameTap } from '../types/gametap'
import { TapTimes } from '../types/enums/gameTap'

const GameTapSchema = new Schema<IGameTap>({
    date: { type: Date, required: true },
    time: {type: String, enum: Object.keys(TapTimes), required: true},
    performedBy: {type: Schema.Types.ObjectId, ref: 'Employee', required: true},
    tappedGames: [{type: Schema.Types.ObjectId, ref: 'Game', required: true}]
})

export default model('GameTap', GameTapSchema)