import { Router } from 'express'
import type { IGame } from '../db/types/game'
import guardError from '../utils/guardError'

import Games from '../db/models/game'

const router = Router()

router.route('/')
    .get((req, res) => {
        Games.find({}, undefined, guardError<IGame>(res, {}, games => {
            res.json(games)
        }))
    })
    .post((req, res) => {
        Games.create(req.body)
            .then(game => res.json(game))
            .catch(err => res.status(500).json(err))
    })

router.route('/:id')
    .get((req, res) => {
        res.end()
    })
    .patch((req, res) => {
        res.end()
    })
    .delete((req, res) => {
        res.end()
    })

export default router