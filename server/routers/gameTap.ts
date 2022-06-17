import { Router } from 'express'
import type { IGameTap } from '../db/types/gameTap'
import type { IGame } from '../db/types/game'
import guardError from '../utils/guardError'

import GameTap from '../db/models/gameTap'
import Game from '../db/models/game'

const router = Router()

router.route('/')
    .post((req, res) => {
        GameTap.create(req.body, guardError<IGameTap>(res, {}, tap => {
            Game.findOne({cardTapPosition: 1}, undefined, guardError<IGame>(res, {}, game => {
                res.json({tap, firstGame: game})
            }))
        }))
            
    })
    .get((req, res) => {
        GameTap.find({}, undefined, guardError<IGameTap>(res, {}, games => {
            res.json(games)
        }))
    })

router.route('/:id')
    .get((req, res) => {
        GameTap.findById(req.params.id, undefined, guardError<IGameTap>(res, {}, game => {
            res.json(game)
        }))
    })
    .patch((req, res) => {
        GameTap.findByIdAndUpdate(req.params.id, 
            { $set: req.body },
            { new: true },
            guardError<IGameTap>(res, {}, game => {
                res.json(game)
            })
        )
    })
    .delete((req, res) => {
        GameTap.findByIdAndDelete(req.params.id, undefined, guardError<IGameTap>(res, {}, game => {
            res.json({deleted: game})
        }))
    })

router.route('/:tapId/:gameId')
    .post((req, res) => {
        GameTap.findByIdAndUpdate(req.params.tapId, {
            $push: {tappedGames: req.params.gameId}
        }, { new: true }, guardError<IGameTap>(res, {}, async tap => {
            await tap?.populate('tappedGames')

        }))

    })

export default router