import express from 'express'
import Codes from 'http-status-codes'
import { expressjwt } from "express-jwt"

import gamesRouter from './routers/games'
import employeesRouter from './routers/employees'
import tapRouter from './routers/gameTap'
import authRouter from './routers/auth'

import './db/connection'

import type { Request, Response, NextFunction } from 'express'

// Configuration
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(expressjwt({
    secret: 'superSecretDevToken',
    algorithms: ['HS256']
}).unless({ path: ['/auth/login']}))

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err.name === "UnauthorizedError") {
      res.status(Codes.UNAUTHORIZED).json({err: 'No valid authorization token found'});
    } else {
      next(err);
    }
  });

// Connect routers
app.use('/games', gamesRouter)
app.use('/employees', employeesRouter)
app.use('/tap', tapRouter)
app.use('/auth', authRouter)

// Launch app
app.listen(3000, () => {
    console.log('Locked and loaded!')
})