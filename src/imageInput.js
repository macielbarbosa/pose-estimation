const tf = require('@tensorflow/tfjs-node')
const { Image, createCanvas } = require('canvas')

module.exports = src =>
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
