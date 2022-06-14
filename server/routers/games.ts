import { Router } from 'express'

const router = Router()

router.route('/')
    .get((req, res) => {
        res.end()
    })
    .post((req, res) => {
        res.end()
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