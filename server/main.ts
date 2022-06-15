import express from 'express'

import gamesRouter from './routers/games'
import employeesRouter from './routers/employees'

import './db/connection'

// Configuration
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect routers
app.use('/games', gamesRouter)
app.use('/employees', employeesRouter)

// Launch app
app.listen(3000, () => {
    console.log('Locked and loaded!')
})