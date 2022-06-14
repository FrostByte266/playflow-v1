import { Schema, model } from 'mongoose'
import type { IGameIssue } from '../types/game.d'
import { Issue } from '../types/enums/issue'

export const GameIssueSchema = new Schema<IGameIssue>({
    description: String,
    reportedBy: {type: Schema.Types.ObjectId, ref: 'Employee' },
    date: Date,
    type: {type: String, enum: Object.keys(Issue.Type), default: Issue.Type.NON_CRITICAL},
    state: {type: String, enum: Object.keys(Issue.Status), default: Issue.Status.REPORTED}
})

export default model('GameIssue', GameIssueSchema)