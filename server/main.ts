import { Router } from 'express'

const router = Router()

router.get('/ts', (req, res) => {
    res.send('booyah')
})

export { router as indexRouter }