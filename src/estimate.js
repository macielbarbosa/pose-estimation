const imageInput = require('./imageInput')

const estimate = async (src, net) => {
  const input = await imageInput(src)
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

module.exports = net => async src => {
  try {
    const coordinates = await estimate(src, net)
    return coordinates
  } catch (error) {
    console.error('Error in pose estimation >', error)
    return false
  }
}
