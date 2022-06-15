import express from 'express'

import { handler } from './build/handler.js'
import { indexRouter } from './build.cjs'

const app = express()

app.use('/api/', indexRouter)
app.use(handler)

app.listen(3000, () => {
    console.log('App listening')
})