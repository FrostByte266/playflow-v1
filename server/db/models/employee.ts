import { Schema, model } from 'mongoose'
import type { IEmployee } from '../types/employee.d'
import { Roles } from '../types/enums/employee'

const EmployeeSchema = new Schema<IEmployee>({
    ID: Number,
    name: String,
    pin: Number,
    role: {type: String, enum: Object.keys(Roles)}
})

export default model('Employee', EmployeeSchema)