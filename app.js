const tf = require('@tensorflow/tfjs-node')
const posenet = require('@tensorflow-models/posenet')
const { Image, createCanvas } = require('canvas')
const express = require('express')
const app = express()
app.use(express.json())

const header = require('./header')
var net

const imageInput = src =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => {
      const canvas = createCanvas(image.width, image.height)
      const context = canvas.getContext('2d')
      context.drawImage(image, 0, 0)
      resolve(tf.browser.fromPixels(canvas))
    }
    image.onerror = () => reject('Error loading image')
    image.src = src
  })

const estimate = async url => {
  const input = await imageInput(url)
  const estimation = await net.estimateMultiplePoses(input, {
    flipHorizontal: false,
    maxDetections: 2,
    scoreThreshold: 0.6,
    nmsRadius: 20,
  })
  const coordinates = []
  estimation[0].keypoints.forEach(({ position }) => {
    const { x, y } = position
    coordinates.push(x, y)
  })
  return coordinates
}

app.get('/', (_, response) => {
  response.send('Pose estimation API')
})

app.get('/header', (_, response) => {
  console.log('Sending header')
  response.send(header)
})

app.post('/estimate', (request, response) => {
  const { url } = request.query
  const { base64 } = request.body
  const src = base64 || url
  console.log(`Sending pose estimation > ${url ? 'URL: ' + url : 'BASE64'}`)
  estimate(src)
    .then(coordinates => response.send(coordinates))
    .catch(error => {
      console.error('Error in pose estimation >', error)
      response.send(false)
    })
})

const initService = async () => {
  console.log('Starting service...')
  net = await posenet.load()
  const port = process.env.PORT || 3000
  app.listen(port, function() {
    console.log(`Listening on port ${port}!`)
  })
}

initService()
