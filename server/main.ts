import { Router } from 'express'

import gameRouter from './routers/games'

import './db/connection'

const router = Router()

router.get('/ts', (req, res) => {
    res.send('booyah')
})

router.use(gameRouter)

export { router as indexRouter }