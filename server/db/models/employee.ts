import { Schema, model } from 'mongoose'
import type { IEmployee } from '../types/employee.d'
import { Role } from '../types/enums/employee'

const EmployeeSchema = new Schema<IEmployee>({
    ID: number,
    name: string,
    pin: number,
    role: {type: String, enum: Object.keys(Role)}
})

export default model('Employee', EmployeeSchema)