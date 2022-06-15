import express from 'express'

import gameRouter from './routers/games'

import './db/connection'

// Configuration
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect routers
app.use('/games', gameRouter)

// Launch app
app.listen(3000, () => {
    console.log('Locked and loaded!')
})