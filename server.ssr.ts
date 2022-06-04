import express from 'express'
const app = express()
import { readFileSync } from 'fs'

// Import app built for SSR
import { default as App } from './dist/server/App.ssr'

// Create Svelte Easyroute renderer
const renderer = require('svelte-easyroute/ssr')()

// Read template file
const template = readFileSync(__dirname + '/dist/index.html', 'utf8')

app.use('/assets', express.static(__dirname + '/dist/assets'))
app.use('/favicon.ico', express.static(__dirname + '/public/favicon.ico'))

app.get('*', async (req, res) => {
    // Pass any props to component here
    const rendered = await renderer({
        component: App,
        props: {
            name: 'SSR'
        },
        // Don't forget to pass URL into renderer
        url: req.url
    })
    const ssrHtml = template
        .replace('{$ HTML $}', rendered.html)
        .replace('{$ STYLES $}', rendered.css.code)
        .replace('{$ HEAD $}', rendered.head)
    res.send(ssrHtml)
})

app.listen(3000, () => {
    console.log('Svelte SSR template is online!', 'http://localhost:3000')
})
