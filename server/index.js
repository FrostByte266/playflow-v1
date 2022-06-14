import express from 'express'

import { handler } from './build/handler.js'
import { indexRouter } from './build/backend.cjs'

const app = express()

app.use(handler)
app.use(indexRouter)

app.listen(3000, () => {
    console.log('App listening')
})