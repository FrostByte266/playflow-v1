import { Router } from 'express'

import jwt from 'jsonwebtoken'
import Employees from '../db/models/employee'
import guardError from '../utils/guardError'
import Codes from 'http-status-codes'

import type { IEmployee } from '../db/types/employee'
import type { ILoginBody } from '../types/bodies/login'

const router = Router()

router.post('/login', (req, res) => {
    const { ID, pin } = req.body as ILoginBody
    Employees.findOne({ ID, pin }, undefined, undefined, guardError<IEmployee>(res, {}, employee => {
        if(!employee) {
            res.status(Codes.UNAUTHORIZED).json({error: 'No matching credentials found'})
        } else {
            const token = jwt.sign(employee.toObject(), 'superSecretDevToken', { expiresIn: 60**2 })
            res.json({ authorized: employee, token })
        }
    }))
})

export default router
