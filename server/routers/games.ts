import { Router } from 'express'
import type { IGame } from '../db/types/game'
import guardError from '../utils/guardError'

import Games from '../db/models/game'

const router = Router()

router.route('/')
    .post((req, res) => {
        Games.create(req.body)
            .then(game => res.json(game))
            .catch(err => res.status(500).json(err))
    })
    .get((req, res) => {
        Games.find({}, undefined, guardError<IGame>(res, {}, games => {
            res.json(games)
        }))
    })

router.route('/:id')
    .get((req, res) => {
        Games.findById(req.params.id, undefined, guardError<IGame>(res, {}, game => {
            res.json(game)
        }))
    })
    .patch((req, res) => {
        Games.findByIdAndUpdate(req.params.id, 
            { $set: req.body },
            { new: true },
            guardError<IGame>(res, {}, game => {
                res.json(game)
            })
        )
    })
    .delete((req, res) => {
        Games.findByIdAndDelete(req.params.id, undefined, guardError<IGame>(res, {}, game => {
            res.json({deleted: game})
        }))
    })

router.route('/:gameId/issues')
    .get((req, res) => {
        Games.findById(req.params.gameId, 'issues', undefined, guardError<IGame>(res, {}, doc => {
            if (doc !== null) {
                res.json(doc.issues)
            }
        }))
    })
    .post((req, res) => {
        Games.findByIdAndUpdate(req.params.gameId,
            {
                $push: { 'issues': req.body }
            },
            { new: true },
            guardError<IGame>(res, {}, updated => {
                    res.json(updated)
                }
            )
        )
    })

export default router