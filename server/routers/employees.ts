import { Router } from 'express'
import type { IGame } from '../db/types/game'
import guardError from '../utils/guardError'

import Employees from '../db/models/employee'

const router = Router()

router.route('/')
    .post((req, res) => {
        Employees.create(req.body)
            .then(game => res.json(game))
            .catch(err => res.status(500).json(err))
    })
    .get((req, res) => {
        Employees.find({}, undefined, guardError<IGame>(res, {}, games => {
            res.json(games)
        }))
    })

router.route('/:id')
    .get((req, res) => {
        Employees.findById(req.params.id, undefined, guardError<IGame>(res, {}, game => {
            res.json(game)
        }))
    })
    .patch((req, res) => {
        Employees.findByIdAndUpdate(req.params.id, 
            { $set: req.body },
            { new: true },
            guardError<IGame>(res, {}, game => {
                res.json(game)
            })
        )
    })
    .delete((req, res) => {
        Employees.findByIdAndDelete(req.params.id, undefined, guardError<IGame>(res, {}, game => {
            res.json({deleted: game})
        }))
    })

export default router