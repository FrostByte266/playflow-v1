import { Schema, model } from 'mongoose'
import type { IGameTap } from '../types/gametap'
import { TapTimes } from '../types/enums/gameTap'

const GameTapSchema = new Schema<IGameTap>({
    date: Date,
    time: {type: String, enum: Object.keys(TapTimes)},
    performedBy: {type: Schema.Types.ObjectId, ref: 'Employee'},
    tappedGames: [{type: Schema.Types.ObjectId, ref: 'Game'}]
})

export default model('GameTap', GameTapSchema)