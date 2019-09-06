const posenet = require('@tensorflow-models/posenet')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }))
app.use(express.json())

const estimate = require('./src/estimate')
const header = require('./src/header')
var netEstimate

app.get('/', (_, response) => {
  response.send('Pose estimation API')
})

app.get('/header', (_, response) => {
  console.log('Sending header')
  response.send(header)
})

app.get('/estimate', (request, response) => {
  const { url } = request.query
  console.log(`Sending pose estimation > URL: ${url}`)
  netEstimate(url).then(value => response.send(value))
})

app.post('/estimate', (request, response) => {
  const { base64 } = request.body
  console.log('Sending pose estimation > BASE64')
  netEstimate(base64).then(value => response.send(value))
})

const initService = async () => {
  console.log('Starting service...')
  const net = await posenet.load()
  netEstimate = estimate(net)
  const port = process.env.PORT || 3000
  app.listen(port, function() {
    console.log(`Listening on port ${port}!`)
  })
}

initService()
